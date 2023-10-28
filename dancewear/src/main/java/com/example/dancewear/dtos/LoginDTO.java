package com.example.dancewear.dtos;


import com.example.dancewear.entity.GeneralUser;

public class LoginDTO {
    private GeneralUser user;
    private String jwt;

    public LoginDTO(){
        super();
    }

    public LoginDTO(GeneralUser  user, String jwt){
        this.user = user;
        this.jwt = jwt;
    }

    public GeneralUser getUser(){
        return this.user;
    }

    public void setUser(GeneralUser  user){
        this.user = user;
    }

    public String getJwt(){
        return this.jwt;
    }

    public void setJwt(String jwt){
        this.jwt = jwt;
    }

}