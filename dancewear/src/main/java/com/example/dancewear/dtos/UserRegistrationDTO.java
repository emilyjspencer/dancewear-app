package com.example.dancewear.dtos;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class UserRegistrationDTO {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String roleAuthority;


    public String toString(){
        return "Non dance teacher user registration info: username: " + this.username + " password: " + this.password;
    }

}
