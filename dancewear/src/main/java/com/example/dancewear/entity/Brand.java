package com.example.dancewear.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;



@Entity
@Data
public class Brand {

    @Id
    private Integer id;


    private String name;


}
