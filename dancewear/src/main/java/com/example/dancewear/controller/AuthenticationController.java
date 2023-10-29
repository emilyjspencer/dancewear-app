package com.example.dancewear.controller;

import com.example.dancewear.dtos.DanceTeacherRegistrationDTO;
import com.example.dancewear.dtos.LoginDTO;
import com.example.dancewear.dtos.RegistrationDTO;
import com.example.dancewear.dtos.UserRegistrationDTO;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AuthenticationController {

        @Autowired
        private AuthenticationService authenticationService;

        @PostMapping("/register/user")
        public GeneralUser registerUser(@RequestBody UserRegistrationDTO body) {
            return authenticationService.registerUser(body.getUsername(), body.getPassword(), body.getFirstName(), body.getLastName(), body.getEmailAddress(),   body.getRoleAuthority());
        }

        @PostMapping("/register/dance-teacher")
        public GeneralUser registerDanceTeacher(@RequestBody DanceTeacherRegistrationDTO body) {
            return authenticationService.registerDanceTeacher(body.getUsername(), body.getPassword(), body.getFirstName(), body.getLastName(), body.getEmailAddress(),  body.getIstdMemberCode(),  body.getRoleAuthority());
        }

        @PostMapping("/login")
        public LoginDTO loginUser(@RequestBody RegistrationDTO body) {
            return authenticationService.loginUser(body.getUsername(), body.getPassword());
        }
    }



