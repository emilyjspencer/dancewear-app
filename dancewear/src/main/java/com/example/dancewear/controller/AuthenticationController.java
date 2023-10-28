package com.example.dancewear.controller;

import com.example.dancewear.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/authentication")
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthenticationService authenticationService;

/*
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegistrationRequest request
    ) {
        return ResponseEntity.ok(authenticationService.register(request));
    }
    */

}
