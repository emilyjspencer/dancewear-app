package com.example.dancewear.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
    @Data
    public class User {

        @Id
        private int id;

        private String firstname;

        private String lastname;

    }
