package com.example.dancewear.entity;


import lombok.Data;


import javax.persistence.*;


@Entity
@Data
public class Basket {

    @Id
    private int id;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "user_id")
    private User user;


    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    private Product product;

}
