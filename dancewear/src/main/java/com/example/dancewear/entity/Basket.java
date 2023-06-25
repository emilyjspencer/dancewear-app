package com.example.dancewear.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;




@Entity
@Data
public class Basket {

    @Id
    private int id;

    //@OneToOne(cascade = CascadeType.PERSIST)
    //@JoinColumn(name = "user_id")
    //private User user;


    //@OneToMany(cascade = CascadeType.PERSIST)
    //@JoinColumn(name = "product_id")
    //private Product product;

}
