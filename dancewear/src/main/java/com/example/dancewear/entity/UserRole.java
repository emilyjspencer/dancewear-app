package com.example.dancewear.entity;


import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;


@Entity
@Table(name="roles")
public class UserRole implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="role_id")
    private Integer roleId;

    private String authority;

    public UserRole(){
        super();
    }

    public UserRole(String authority){
        this.authority = authority;
    }

    public UserRole(Integer roleId, String authority){
        this.roleId = roleId;
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        // TODO Auto-generated method stub
        return this.authority;
    }

    public void setAuthority(String authority){
        this.authority = authority;
    }

    public Integer getRoleId(){
        return this.roleId;
    }

    public void setRoleId(Integer roleId){
        this.roleId = roleId;
    }
}