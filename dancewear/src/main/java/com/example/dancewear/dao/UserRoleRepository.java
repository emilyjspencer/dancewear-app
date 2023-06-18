package com.example.dancewear.dao;

import com.example.dancewear.entity.EUserRole;
import com.example.dancewear.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

    public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
        Optional<UserRole> findByName(EUserRole name);
    }

