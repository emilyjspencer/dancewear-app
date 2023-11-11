package com.example.dancewear.controller;

import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("")
@CrossOrigin("*")
public class NormalUserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public String helloNormalUserController() {
        return "Non Dance teachers access level";
    }

    @GetMapping("/users")
    public List<GeneralUser> getNormalUsersUsers() {
        return userService.getAllNormalUsers();
    }
}