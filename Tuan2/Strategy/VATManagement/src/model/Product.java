package model;

import strategy.TaxStrategy;

public class Product {

    private String name;
    private double price;
    private TaxStrategy strategy;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void setStrategy(TaxStrategy strategy) {
        this.strategy = strategy;
    }

    public void calculateTax() {
        double tax = strategy.calculate(price);
        System.out.println("Sản phẩm: " + name);
        System.out.println("Giá: " + price);
        System.out.println("Thuế: " + tax);
        System.out.println("-------------------");
    }
}