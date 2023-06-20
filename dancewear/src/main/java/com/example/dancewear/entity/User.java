package com.example.dancewear.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;
import java.util.Collection;
import java.util.List;


@Entity
    @Data
    public class User implements UserDetails {

        @Id
        private int id;

        private String first_name;

        private String last_name;

        private String email;

        private BigInteger phone_number;

        private String user_password; // will be hashed

        private String address;

        private BigInteger account_number;

        private String favourite_dance_genre;

        private EUserRole role; // enum for different users dance teacher user, general user, admin


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
