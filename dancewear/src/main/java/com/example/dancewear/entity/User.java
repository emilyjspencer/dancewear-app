package com.example.dancewear.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import java.math.BigInteger;
import java.util.Collection;
import java.util.List;



@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
    //public class User implements UserDetails {
public class User {

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

        //private EUserRole role; // enum for different users dance teacher user, general user, admin




    //@Override
   //public Collection<? extends GrantedAuthority> getAuthorities() {
     //   return List.of(new SimpleGrantedAuthority(role.name()));
    //}

    /*
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
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

*/

}
