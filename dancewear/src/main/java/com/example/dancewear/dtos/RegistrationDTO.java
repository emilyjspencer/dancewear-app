package com.example.dancewear.dtos;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class RegistrationDTO {
    private String username;
    private String password;

    private String roleAuthority;



    public RegistrationDTO(String username, String password, String roleAuthority){
        super();
        this.username = username;
        this.password = password;
        this.roleAuthority = roleAuthority;
    }

    public String getUsername(){
        return this.username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String toString(){
        return "Registration info: username: " + this.username + " password: " + this.password;
    }

}
