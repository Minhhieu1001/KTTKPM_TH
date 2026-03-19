package model;

import java.util.ArrayList;
import java.util.List;

public class Order {
    private int id;
    private List<Product> products = new ArrayList<>();

    public Order(int id) {
        this.id = id;
    }

    public void addProduct(Product p) {
        products.add(p);
    }

    public double getTotal() {
        return products.stream().mapToDouble(Product::getPrice).sum();
    }

    public void display() {
        System.out.println("Order ID: " + id);
        for (Product p : products) {
            System.out.println(p);
        }
        System.out.println("Total: " + getTotal());
    }
}