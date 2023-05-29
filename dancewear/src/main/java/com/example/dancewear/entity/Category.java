package com.example.dancewear.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
public class Category {

    @Id
    private int id;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "productId")
    @JoinTable(name = "CATEGORY_PRODUCT")
    private List<Product> products;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "productId")
    private Product product;
}
