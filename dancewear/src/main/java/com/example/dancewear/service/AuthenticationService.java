package com.example.dancewear.service;

import com.example.dancewear.dao.GeneralUserRepository;
import com.example.dancewear.dao.RoleRepository;
import com.example.dancewear.dtos.LoginDTO;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.entity.UserRole;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;


@Service
@Transactional
public class AuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationService.class);

    @Autowired
    private GeneralUserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;


    public GeneralUser registerUser(String username, String password, String firstName, String lastName, String emailAddress,  String roleAuthority) {
        // Encode the password
        String encodedPassword = passwordEncoder.encode(password);

        // Find the role by authority
        UserRole consultantRole = roleRepository.findByAuthority(roleAuthority)
                .orElseThrow(() -> new IllegalArgumentException("Invalid role specified: " + roleAuthority));


        Set<UserRole> authorities = new HashSet<>();
        authorities.add(consultantRole);


        GeneralUser user = new GeneralUser();
        user.setUsername(username);
        user.setPassword(encodedPassword);
        user.setAuthorities(authorities);


        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmailAddress(emailAddress);



        return userRepository.save(user);
    }

    public GeneralUser registerDanceTeacher(String username, String password, String firstName, String lastName, String emailAddress, String istdMembershipCode, String roleAuthority) {

        String encodedPassword = passwordEncoder.encode(password);

        UserRole danceTeacherRole = roleRepository.findByAuthority(roleAuthority)
                .orElseThrow(() -> new IllegalArgumentException("Invalid role specified: " + roleAuthority));


        Set<UserRole> authorities = new HashSet<>();
        authorities.add(danceTeacherRole);


        GeneralUser danceTeacher = new GeneralUser();
        danceTeacher.setUsername(username);
        danceTeacher.setPassword(encodedPassword);
        danceTeacher.setAuthorities(authorities);


        danceTeacher.setFirstName(firstName);
        danceTeacher.setLastName(lastName);
        danceTeacher.setEmailAddress(emailAddress);
        danceTeacher.setIstdMembershipCode(istdMembershipCode);




        return userRepository.save(danceTeacher);
    }


    public LoginDTO loginUser(String username, String password) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String jwt = jwtService.generateJwt(auth);
            logger.info("User logged in: {}", username);
            return new LoginDTO(userRepository.findByUsername(username).get(), jwt);
        } catch (AuthenticationException e) {
            logger.error("Login failed for user: " + username, e);
            return new LoginDTO(null, "");
        }
    }


}


