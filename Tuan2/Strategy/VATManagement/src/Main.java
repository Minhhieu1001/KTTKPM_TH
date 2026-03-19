import model.Product;
import strategy.*;

public class Main {
    public static void main(String[] args) {

        Product p1 = new Product("Laptop", 1000);
        p1.setStrategy(new VATStrategy());
        p1.calculateTax();

        Product p2 = new Product("Bia", 200);
        p2.setStrategy(new ConsumptionTaxStrategy());
        p2.calculateTax();

        Product p3 = new Product("Xe sang", 50000);
        p3.setStrategy(new LuxuryTaxStrategy());
        p3.calculateTax();
    }
}