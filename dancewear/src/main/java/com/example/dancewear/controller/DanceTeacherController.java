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
public class DanceTeacherController {

    @Autowired
    private UserService userService;

    @GetMapping("/dance-teacher")
    public String helloAccountManagerController() {
        return "Dance teachers access level";
    }

    @GetMapping("/dance-teachers")
    public List<GeneralUser> getDanceTeachers() {
        return userService.getAllDanceTeachers();
    }
}