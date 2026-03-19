package context;

import state.*;

public class Order {

    private OrderState state;

    public Order() {
        state = new NewState(); // trạng thái ban đầu
    }

    public void setState(OrderState state) {
        this.state = state;
    }

    public void process() {
        state.handle(this);
    }
}