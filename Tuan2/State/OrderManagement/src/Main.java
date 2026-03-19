import context.Order;
import state.CancelledState;

public class Main {
    public static void main(String[] args) {

        Order order = new Order();

        // Luồng bình thường
        order.process(); // New → Processing
        order.process(); // Processing → Delivered
        order.process(); // Delivered

        System.out.println("-----");

        // Trường hợp hủy đơn
        Order order2 = new Order();
        order2.setState(new CancelledState());
        order2.process();
    }
}