package com.example.dancewear;

import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.entity.UserRole;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestGeneralUser {

    @Test
    public void testGettersAndSetters() {
        GeneralUser user = new GeneralUser();
        user.setUsername("emilyj");
        user.setPassword("password");

        assertEquals("emilyj", user.getUsername());
        assertEquals("password", user.getPassword());
    }

    @Test
    public void testAuthoritiesAdmin() {
        GeneralUser user = new GeneralUser();
        UserRole role = new UserRole("ADMIN");
        Set<UserRole> roles = new HashSet<>();
        roles.add(role);

        user.setAuthorities(roles);

        assertTrue(user.getAuthorities().contains(role));
    }

    @Test
    public void testAuthoritiesDanceTeacher() {
        GeneralUser user = new GeneralUser();
        UserRole danceTeacherRole = new UserRole("DANCE_TEACHER");
        Set<UserRole> roles = new HashSet<>();
        roles.add(danceTeacherRole);

        user.setAuthorities(roles);

        assertTrue(user.getAuthorities().contains(danceTeacherRole));
    }

    @Test
    public void testAuthoritiesNormalUser() {
        GeneralUser user = new GeneralUser();
        UserRole normalUserRole = new UserRole("USER");
        Set<UserRole> roles = new HashSet<>();
        roles.add(normalUserRole);

        user.setAuthorities(roles);

        assertTrue(user.getAuthorities().contains(normalUserRole));
    }

}
