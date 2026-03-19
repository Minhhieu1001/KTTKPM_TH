package service;

import model.Product;
import model.Order;

import java.util.ArrayList;
import java.util.List;

public class SalesManagementSystem {

    private static SalesManagementSystem instance;

    private List<Product> products;
    private List<Order> orders;

    private SalesManagementSystem() {
        products = new ArrayList<>();
        orders = new ArrayList<>();
    }

    public static SalesManagementSystem getInstance() {
        if (instance == null) {
            instance = new SalesManagementSystem();
        }
        return instance;
    }

    // Product
    public void addProduct(Product p) {
        products.add(p);
    }

    public void showProducts() {
        for (Product p : products) {
            System.out.println(p);
        }
    }

    // Order
    public void createOrder(Order o) {
        orders.add(o);
    }

    public void showOrders() {
        for (Order o : orders) {
            o.display();
        }
    }
}