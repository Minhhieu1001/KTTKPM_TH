package state;

import context.Order;

public class CancelledState implements OrderState {
    @Override
    public void handle(Order order) {
        System.out.println("Trạng thái: Hủy → Hủy đơn và hoàn tiền");
    }
}