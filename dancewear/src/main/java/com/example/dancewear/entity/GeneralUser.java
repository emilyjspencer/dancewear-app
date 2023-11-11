package com.example.dancewear.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;


@Getter
@Setter
@RequiredArgsConstructor

@Entity
@Table(name="users")
public class GeneralUser implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;
    @Column(unique = true, nullable = false)
    private String username;
    @Column(nullable = false)
    private String password;
    private String firstName;
    private String lastName;

    private String emailAddress;
    private String memberCode;

    public String getMemberCode() {
        return memberCode;
    }

    public void setMemberCode(String memberCode) {
        this.memberCode = memberCode;
    }



    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_role_junction",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )
    private Set<UserRole> authorities;


    public void setAuthorities(Set<UserRole> authorities) {
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return this.authorities;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    /* If you want account locking capabilities create variables and ways to set them for the methods below */
    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }

    //Constructor to be used by the admin user
    public GeneralUser(int i, String string, String encode, Set<UserRole> roles) {
        // TODO Auto-generated constructor stub
    }

}