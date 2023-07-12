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
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;



@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
    //public class User implements UserDetails {
public class User {

        @Id
        private int user_id;

        private String first_name;

        private String last_name;

        private String email;

        private BigInteger phone_number;

        private String user_password; // will be hashed

        private String address;

        private BigInteger account_number;

        //private String favourite_dance_genre;

        //private EUserRole role; // enum for different users dance teacher user, general user, admin


        public User() {}

        public int getUser_id() { return user_id; }

        public void setUserid(int user_id) { this.user_id = user_id; }
        public String getFirst_name() { return first_name; }

        public String setFirst_name(String first_name) { return first_name; }

        public String getLast_name() { return last_name; }

        public void setLast_name(String last_name) {  this.last_name = last_name; }


        public String getEmail() { return email; }

        public void setEmail(String email) { this.email =  email; }

        public BigInteger getPhone_number() { return phone_number; }

        public void setPhone_number(BigInteger phone_number) { this.phone_number = phone_number; }


        public String getUser_password() { return user_password; }

        public void setUser_password(String user_password) { this.user_password = user_password; }

        public String getAddress() { return address; }

        public void setAddress(String phone_number) { this.address = address; }

        public BigInteger getAccount_number() { return account_number; }

        public void setAccount_number(BigInteger account_number) { this.account_number = account_number; }
        @Override
        public String toString() {
                return "User [user_id=" + user_id + ", first_name=" + first_name + ", last_name=" + last_name

                        + ", email=" + email + ", phone_number=" + phone_number +
                        ", user_password=" + user_password + ", address=" + address +
                        ", account_number=" + account_number
                        + "]";
        }



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
