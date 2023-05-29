package com.example.dancewear.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Data
public class Blog{

    @Id
    private int id;

    private String title;

    private String author;

    private String body;

    private LocalDate dateOfBlogPost;

}
