package payment;

public class CreditCardPayment implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("Thanh toán bằng Credit Card: " + amount);
    }
}
