package decorator;

import payment.Payment;

public class DiscountDecorator extends PaymentDecorator {

    public DiscountDecorator(Payment payment) {
        super(payment);
    }

    @Override
    public void pay(double amount) {
        double discount = amount * 0.1;
        double total = amount - discount;
        System.out.println("Giảm giá: " + discount);
        payment.pay(total);
    }
}