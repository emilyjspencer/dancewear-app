package com.example.dancewear.entity;

import lombok.Data;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
public class Category {

    @Id
    private int id;

    private String name;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    @JoinTable(name = "CATEGORY_PRODUCT")
    private List<Product> products;

    @LazyCollection(LazyCollectionOption.FALSE)
    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "brand_id")
    @JoinTable(name = "CATEGORY_BRAND")
    private List<Brand> brands;
}
