package payment;

public class CashPayment implements Payment {
    @Override
    public void pay(double amount) {
        System.out.println("Thanh toán bằng tiền mặt: " + amount);
    }
}