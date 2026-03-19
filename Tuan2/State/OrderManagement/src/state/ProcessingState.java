package state;

import context.Order;

public class ProcessingState implements OrderState {
    @Override
    public void handle(Order order) {
        System.out.println("Trạng thái: Đang xử lý → Đóng gói và vận chuyển");
        order.setState(new DeliveredState());
    }
}