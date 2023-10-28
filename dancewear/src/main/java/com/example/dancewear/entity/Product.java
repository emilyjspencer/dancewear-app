package com.example.dancewear.entity;

import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


@Entity
@Data
public class Product {

    @Id
    private int product_id;

    private String product_name;

    private String description;

    private Integer price;

    // fk  brand
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @OneToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;


    // fk category // could be one to many
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;


    public int getProduct_id() { return product_id; }

    public void setProduct_id(int product_id) { this.product_id = product_id; }

    public String getProduct_name() { return product_name; }

    public void setProduct_name(String product_name) { this.product_name = product_name; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public int getPrice() { return price; }

    public void setPrice(int price) { this.price = price; }

    public Category getCategory () { return category; }

    public void setCategory(Category category) { this.category = category; }

    public Brand getBrand () { return brand; }

    public void setBrand(Brand brand) { this.brand = brand; }


    public Product() {}

    @Override
    public String toString() {
        return "Product [product_id=" + product_id + ", product_name=" + product_name + ", description=" + description

                + ", price=" + price + ", brand=" + brand + ",category=" + category
                + "]";
    }

}
