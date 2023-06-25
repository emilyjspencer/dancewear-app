package com.example.dancewear.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Entity
@Data
public class Review {

    @Id
    private Integer id;

    private String title;

    private String description;

    private Integer stars;

    private Date posted_date;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "author_id")
    private User user;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    private Product product;

}
