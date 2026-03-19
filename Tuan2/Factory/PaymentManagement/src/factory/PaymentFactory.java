package factory;

import payment.CashPayment;
import payment.CreditCardPayment;
import payment.Payment;
import payment.PaypalPayment;

public class PaymentFactory {

    public static Payment createPayment(String type) {

        if (type.equalsIgnoreCase("CREDIT")) {
            return new CreditCardPayment();
        } else if (type.equalsIgnoreCase("PAYPAL")) {
            return new PaypalPayment();
        } else if (type.equalsIgnoreCase("CASH")) {
            return new CashPayment();
        }

        throw new IllegalArgumentException("Unknown payment type");
    }
}