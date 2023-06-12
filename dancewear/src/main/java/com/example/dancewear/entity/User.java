package com.example.dancewear.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;


@Entity
    @Data
    public class User {

        @Id
        private int id;

        private String first_name;

        private String last_name;

        private String email;

        private BigInteger phone_number;

    }
