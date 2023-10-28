package com.example.dancewear.dao;

import com.example.dancewear.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<UserRole, Integer> {
    Optional<UserRole> findByAuthority(String authority);
}