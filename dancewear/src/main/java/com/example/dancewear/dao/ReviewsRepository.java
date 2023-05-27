package com.example.dancewear.dao;

import com.example.dancewear.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewsRepository extends JpaRepository<Review, Integer> {
}
