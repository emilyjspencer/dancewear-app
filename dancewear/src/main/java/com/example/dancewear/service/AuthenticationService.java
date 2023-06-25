package com.example.dancewear.service;

import com.example.dancewear.dao.UserRepository;
import com.example.dancewear.requestresponse.AuthenticationRequest;
import com.example.dancewear.requestresponse.AuthenticationResponse;
import com.example.dancewear.requestresponse.RegistrationRequest;
import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.AuthenticationManager;

import com.example.dancewear.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import com.example.dancewear.entity.EUserRole;

@Service
@RequiredArgsConstructor
public class AuthenticationService {


    private final PasswordEncoder passwordEncoder;
    private final UserRepository repository;
    private final TokenManipulationService tokenManipulationService;
    private final AuthenticationManager authenticationManager;

    /*
    public AuthenticationResponse register(RegistrationRequest request) {
        // create a user
        var user = User.builder()
                .first_name(request.getFirstname())
                .last_name(request.getLastname())
                .email(request.getEmail())
                .user_password(request.getPassword())
                .role(EUserRole.ROLE_USER)
                .build();
        repository.save(user);
        // generate token
        var jwtToken = tokenManipulationService.generateToken(user);
        // save to db
        // return generated token
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .build();

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = tokenManipulationService.generateToken(user);
        // save to db
        // return generated token
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .build();


    }
*/
}
