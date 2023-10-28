package com.example.dancewear.service;

import com.example.dancewear.dao.GeneralUserRepository;
import com.example.dancewear.dao.RoleRepository;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.entity.User;
import com.example.dancewear.entity.UserRole;
import com.example.dancewear.exceptions.UserAlreadyExistsException;
import com.example.dancewear.exceptions.UserNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



    @Service
    public class UserService implements UserDetailsService {

        @Autowired
        private PasswordEncoder encoder;

        @Autowired
        private GeneralUserRepository userRepository;

        @Autowired
        private RoleRepository roleRepository;


        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

            System.out.println("In the user details service");

            return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("user is not valid"));
        }

        public List<GeneralUser> getAllDanceTeachers() {
            UserRole danceTeacherRole = roleRepository.findByAuthority("DANCE_TEACHER")
                    .orElseThrow(() -> new IllegalArgumentException("Role 'Dance Teacher' not found"));
            return userRepository.findAllByAuthorities(danceTeacherRole);
        }


    }











