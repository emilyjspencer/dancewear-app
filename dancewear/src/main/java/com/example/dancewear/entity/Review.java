package com.example.dancewear.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Review {

    @Id
    private Integer id;

    private String author;

    private String title;

    private String description;

    private Integer stars;

}
