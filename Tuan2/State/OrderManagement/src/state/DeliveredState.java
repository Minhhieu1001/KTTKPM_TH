package state;

import context.Order;

public class DeliveredState implements OrderState {
    @Override
    public void handle(Order order) {
        System.out.println("Trạng thái: Đã giao → Hoàn tất đơn hàng");
    }
}