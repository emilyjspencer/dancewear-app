package com.example.dancewear.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class UserRole
{


    @Id
    private int id;

    private String name;



}
