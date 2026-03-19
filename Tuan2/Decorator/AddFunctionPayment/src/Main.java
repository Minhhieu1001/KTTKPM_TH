import payment.*;
import decorator.*;

public class Main {
    public static void main(String[] args) {

        Payment payment = new CreditCardPayment();

        // Gắn thêm giảm giá + phí xử lý
        payment = new DiscountDecorator(payment);
        payment = new ProcessingFeeDecorator(payment);

        payment.pay(1000);

        System.out.println("------");

        Payment payment2 = new PaypalPayment();
        payment2 = new ProcessingFeeDecorator(payment2);
        payment2.pay(500);
    }
}