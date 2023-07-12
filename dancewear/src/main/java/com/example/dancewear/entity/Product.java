package com.example.dancewear.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.Cascade;


@Entity
@Data
public class Product {

    @Id
    private int product_id;

    private String name;

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


    public int product_id() { return product_id; }

    public void setProduct_id(int product_id) { this.product_id = product_id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

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
        return "Product [product_id=" + product_id + ", name=" + name + ", description=" + description

                + ", price=" + price + ", brand=" + brand + ",category=" + category
                + "]";
    }

}
