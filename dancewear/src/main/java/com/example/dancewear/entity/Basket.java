package com.example.dancewear.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Basket {

    @Id
    private int id;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "userId")
    private User user;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "productId")
    @JoinTable(name = "BASKET_PRODUCT")
    private List<Product> products;

}
