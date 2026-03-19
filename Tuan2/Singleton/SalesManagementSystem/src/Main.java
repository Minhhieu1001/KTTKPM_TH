import model.Product;
import model.Order;
import service.SalesManagementSystem;

public class Main {
    public static void main(String[] args) {

        SalesManagementSystem system = SalesManagementSystem.getInstance();


        Product p1 = new Product(1, "Laptop", 1000);
        Product p2 = new Product(2, "Mouse", 50);

        system.addProduct(p1);
        system.addProduct(p2);

        System.out.println("=== PRODUCT LIST ===");
        system.showProducts();


        Order order1 = new Order(101);
        order1.addProduct(p1);
        order1.addProduct(p2);

        system.createOrder(order1);

        System.out.println("\n=== ORDER LIST ===");
        system.showOrders();
    }
}