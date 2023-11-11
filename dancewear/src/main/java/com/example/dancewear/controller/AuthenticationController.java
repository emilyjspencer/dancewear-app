package com.example.dancewear.controller;

import com.example.dancewear.dtos.DanceTeacherRegistrationDTO;
import com.example.dancewear.dtos.LoginDTO;
import com.example.dancewear.dtos.RegistrationDTO;
import com.example.dancewear.dtos.UserRegistrationDTO;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);
        @Autowired
        private AuthenticationService authenticationService;

        @PostMapping("/register/user")
        public GeneralUser registerUser(@RequestBody UserRegistrationDTO body) {
            return authenticationService.registerUser(body.getUsername(), body.getPassword(), body.getFirstName(), body.getLastName(), body.getEmailAddress(),   body.getRoleAuthority());
        }

        @PostMapping("/register/danceTeacher")
        public GeneralUser registerDanceTeacher(@RequestBody DanceTeacherRegistrationDTO body) {
            return authenticationService.registerDanceTeacher(body.getUsername(), body.getPassword(), body.getFirstName(), body.getLastName(), body.getEmailAddress(),  body.getMemberCode(),  body.getRoleAuthority());
        }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody RegistrationDTO body) {
        try {
            LoginDTO response = authenticationService.loginUser(body.getUsername(), body.getPassword());
            if (response.getUser() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed. Invalid credentials.");
            }
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Login failed for user: " + body.getUsername(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login failed.");
        }
    }
    }



