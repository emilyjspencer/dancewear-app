package com.example.dancewear.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/content")
@CrossOrigin("*")
public class ContentController {


    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('USER') or hasRole('USER') or hasRole('DANCE_TEACHER')")
    public String adminAccess() {
        return "ADMIN Content.";
    }

    @GetMapping("/dance-teacher")
    @PreAuthorize("hasRole('DANCE_TEACHER')")
    public String danceTeacherAccess() {
        return "Dance teacher content.";
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER')")
    public String userAccess() {
        return "User content.";
    }
}