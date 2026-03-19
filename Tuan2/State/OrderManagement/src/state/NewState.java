package state;

import context.Order;

public class NewState implements OrderState {
    @Override
    public void handle(Order order) {
        System.out.println("Trạng thái: Mới tạo → Kiểm tra thông tin đơn hàng");
        order.setState(new ProcessingState());
    }
}