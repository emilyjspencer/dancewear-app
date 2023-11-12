package com.example.dancewear;

import com.example.dancewear.dao.GeneralUserRepository;
import com.example.dancewear.dao.RoleRepository;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.entity.UserRole;
import com.example.dancewear.service.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class TestAuthenticationService {


        @InjectMocks
        private AuthenticationService authenticationService;

        @Mock
        private GeneralUserRepository userRepository;

        @Mock
        private RoleRepository roleRepository;

        @Mock
        private PasswordEncoder passwordEncoder;

        @Mock
        private AuthenticationManager authenticationManager;

        @Mock
        private TokenService tokenService;

        @BeforeEach
        public void setUp() {
            MockitoAnnotations.openMocks(this);
        }

        @Test
        public void testRegisterDanceTeacher() {

            UserRole mockRole = new  UserRole ("ROLE_DANCE_TEACHER");
            when(roleRepository.findByAuthority("ROLE_DANCE_TEACHER")).thenReturn(Optional.of(mockRole));


            GeneralUser mockDanceTeacher = new GeneralUser();
            mockDanceTeacher .setUsername("dance");
            mockDanceTeacher .setPassword("password");
            when(userRepository.save(any(GeneralUser.class))).thenReturn(mockDanceTeacher);

            GeneralUser registeredDanceTeacher = authenticationService.registerDanceTeacher("dance", "password",
                    "em", "spen", "em@test.com", "hhhhhh", "ROLE_DANCE_TEACHER");


            assertEquals("dance", registeredDanceTeacher.getUsername());
            assertEquals("password", registeredDanceTeacher.getPassword());
        }

        @Test
        public void testRegisterNormalUser() {

            UserRole mockRole = new UserRole("ROLE_USER");
            when(roleRepository.findByAuthority("ROLE_USER")).thenReturn(Optional.of(mockRole));


            GeneralUser mockNormalUser = new GeneralUser();
            mockNormalUser.setUsername("user");
            mockNormalUser.setPassword("password");
            when(userRepository.save(any(GeneralUser.class))).thenReturn(mockNormalUser);

            GeneralUser registeredNormalUser= authenticationService.registerUser("user",
                    "password", "Emj", "Spen", "spen@test.com", "ROLE_USER");

            // Assertions
            assertEquals("user", registeredNormalUser.getUsername());
            assertEquals("password", registeredNormalUser.getPassword());
        }
}
