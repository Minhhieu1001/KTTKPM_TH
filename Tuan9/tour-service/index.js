import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const PORT = process.env.PORT || 8082;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const sequelize = new Sequelize(
  process.env.DB_NAME || 'travel_booking',
  process.env.DB_USER || 'user',
  process.env.DB_PASS || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false
  }
);

const Tour = sequelize.define('Tour', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  duration: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false }
});

const initDb = async (retries = 5) => {
  while (retries) {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true });
      
      const count = await Tour.count();
      if (count === 0) {
        await Tour.bulkCreate([
          {
            id: '1',
            name: 'Ha Long Bay Discovery',
            description: 'Explore the stunning limestone karsts and emerald waters of Ha Long Bay.',
            price: 150,
            duration: '2 Days 1 Night',
            location: 'Quang Ninh, Vietnam',
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800'
          },
          {
            id: '2',
            name: 'Sapa Trekking Adventure',
            description: 'Experience the breathtaking rice terraces and ethnic culture of Sapa.',
            price: 120,
            duration: '3 Days 2 Nights',
            location: 'Lao Cai, Vietnam',
            image: 'https://images.unsplash.com/photo-1504457047772-27fad17438ef?auto=format&fit=crop&q=80&w=800'
          },
          {
            id: '3',
            name: 'Phu Quoc Sunset Tour',
            description: 'Relax on the white sand beaches and enjoy the beautiful sunset of Phu Quoc island.',
            price: 200,
            duration: '4 Days 3 Nights',
            location: 'Kien Giang, Vietnam',
            image: 'https://images.unsplash.com/photo-1589779261593-7becf70a597a?auto=format&fit=crop&q=80&w=800'
          },
          {
            id: '4',
            name: 'Da Lat Pine Forest Retreat',
            description: 'Enjoy the cool breeze and pine forests of the city of eternal spring.',
            price: 100,
            duration: '3 Days 2 Nights',
            location: 'Lam Dong, Vietnam',
            image: 'https://images.unsplash.com/photo-1613271708892-71c107769911?auto=format&fit=crop&q=80&w=800'
          }
        ]);
        console.log('Seeded initial tours');
      }
      console.log('Tour database synced');
      break;
    } catch (error) {
      console.error(`Unable to connect to the database (Retries left: ${retries - 1}):`, error.message);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

initDb();

app.get('/tours', async (req, res) => {
  try {
    const tours = await Tour.findAll();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/tours/:id', async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Tour Service running on port ${PORT}`);
});
