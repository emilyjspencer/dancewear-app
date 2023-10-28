package com.example.dancewear.dao;

import com.example.dancewear.entity.GeneralUser;

import com.example.dancewear.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;



    @Repository
    public interface GeneralUserRepository extends JpaRepository<GeneralUser, Integer> {
        Optional<GeneralUser> findByUsername(String username);

        List<GeneralUser> findAllByAuthorities(UserRole role);
    }
