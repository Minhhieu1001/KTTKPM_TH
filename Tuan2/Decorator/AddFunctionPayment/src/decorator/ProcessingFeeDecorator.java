package decorator;

import payment.Payment;

public class ProcessingFeeDecorator extends PaymentDecorator {

    public ProcessingFeeDecorator(Payment payment) {
        super(payment);
    }

    @Override
    public void pay(double amount) {
        double fee = amount * 0.05;
        double total = amount + fee;
        System.out.println("Phí xử lý: " + fee);
        payment.pay(total);
    }
}