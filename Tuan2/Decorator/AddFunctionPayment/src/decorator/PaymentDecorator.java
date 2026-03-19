package decorator;

import payment.Payment;

public abstract class PaymentDecorator implements Payment {
    protected Payment payment;

    public PaymentDecorator(Payment payment) {
        this.payment = payment;
    }
}