package com.example.dancewear.service;

import com.example.dancewear.dao.GeneralUserRepository;
import com.example.dancewear.dao.RoleRepository;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.entity.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


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

        public List<GeneralUser> getAllNormalUsers() {
            UserRole normalUserRole = roleRepository.findByAuthority("USER")
                    .orElseThrow(() -> new IllegalArgumentException("Role 'User' not found"));
            return userRepository.findAllByAuthorities(normalUserRole);
        }


    }











