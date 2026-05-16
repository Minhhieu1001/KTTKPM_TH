require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ===== CONFIG =====
const PORT = process.env.PORT || 8083;
const SERVICE_IP = process.env.SERVICE_IP || '172.16.62.118';

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017/food_ordering_order';

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || 'http://172.16.62.93:8081';

const FOOD_SERVICE_URL =
  process.env.FOOD_SERVICE_URL || 'http://172.16.56.228:8082';

// ===== DB CONNECT =====
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to Order Service MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ===== SCHEMA =====
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      foodId: String,
      foodName: String,
      price: Number,
      quantity: Number
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'PENDING' },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// ===== API: CREATE ORDER =====
app.post('/orders', async (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items || items.length === 0) {
    return res.status(400).json({ message: 'Invalid request data' });
  }

  try {
    // 1. Validate user
    await axios.get(`${USER_SERVICE_URL}/users/${userId}`);

    // 2. Lấy info tất cả món (song song)
    const foodRequests = items.map((item) =>
      axios.get(`${FOOD_SERVICE_URL}/foods/${item.foodId}`)
    );

    const foodResponses = await Promise.all(foodRequests);

    let orderItems = [];
    let totalPrice = 0;

    for (let i = 0; i < foodResponses.length; i++) {
      const food = foodResponses[i].data;
      const quantity = items[i].quantity;

      const orderItem = {
        foodId: food._id,
        foodName: food.name,
        price: food.price,
        quantity: quantity
      };

      totalPrice += food.price * quantity;
      orderItems.push(orderItem);
    }

    // 3. Tạo 1 order duy nhất
    const newOrder = new Order({
      userId,
      items: orderItems,
      totalPrice,
      status: 'PENDING'
    });

    await newOrder.save();

    console.log(`Order created: ${newOrder._id}`);
    res.status(201).json(newOrder);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'User or Food not found' });
    }

    console.error(error);
    res.status(500).json({ message: 'Error creating order' });
  }
});

// ===== API: GET ALL ORDERS =====
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// ===== API: UPDATE STATUS (Payment Service gọi) =====
app.put('/orders/:id/status', async (req, res) => {
  const { status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order status' });
  }
});

// ===== START SERVER =====
app.listen(PORT, SERVICE_IP, () => {
  console.log(`Order Service running at http://${SERVICE_IP}:${PORT}`);
});