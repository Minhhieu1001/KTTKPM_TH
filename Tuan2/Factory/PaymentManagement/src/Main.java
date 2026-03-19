import factory.PaymentFactory;
import payment.Payment;

public class Main {
    public static void main(String[] args) {

        Payment p1 = PaymentFactory.createPayment("CREDIT");
        p1.pay(1000);

        Payment p2 = PaymentFactory.createPayment("PAYPAL");
        p2.pay(500);

        Payment p3 = PaymentFactory.createPayment("CASH");
        p3.pay(200);
    }
}