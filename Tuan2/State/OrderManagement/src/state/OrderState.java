package state;


import context.Order;

public interface OrderState {
    void handle(Order order);
}