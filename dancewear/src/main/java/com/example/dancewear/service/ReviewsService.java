package com.example.dancewear.service;

import com.example.dancewear.dao.ProductRepository;
import com.example.dancewear.dao.ReviewsRepository;
import com.example.dancewear.entity.Product;
import com.example.dancewear.entity.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewsService {

    private ReviewsRepository reviewsRepository;

    @Autowired
    public ReviewsService(ReviewsRepository reviewsRepository) {
        super();
        this.reviewsRepository = reviewsRepository;
    }

    public List<Review> getAll() {
        return reviewsRepository.findAll();
    }
}
