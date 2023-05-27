package com.example.dancewear.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Brand {

    @Id
    private Integer brandId;


    private String name;


}
