package com.example.dancewear.controller;

import com.example.dancewear.entity.Product;
import com.example.dancewear.entity.Review;
import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.ProductAlreadyExistsException;
import com.example.dancewear.exceptions.ProductNotFoundException;
import com.example.dancewear.exceptions.ReviewAlreadyExistsException;
import com.example.dancewear.exceptions.ReviewNotFoundException;
import com.example.dancewear.service.ProductService;
import com.example.dancewear.service.ReviewsService;
import com.example.dancewear.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/reviews")
public class ReviewsController {

    private static final Logger log = LoggerFactory.getLogger("ReviewsController.class");
    @Autowired
    private ReviewsService reviewsService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Review> getAll() {
        log.info("ReviewController - get all reviews");
        return reviewsService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<Void> addReview(@RequestBody Review review) throws ReviewAlreadyExistsException {
        Review newReview = reviewsService.addReview(review);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newReview.getReview_id()).toUri();
        log.info("Add review to database");
        return ResponseEntity.created(location).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<Review> findReviewById(@PathVariable int id) throws ReviewNotFoundException {
        log.info("Find review by id " + id);
        return ResponseEntity.status(HttpStatus.OK).body(reviewsService.findReviewById(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReviewById(@PathVariable int id) throws ReviewNotFoundException{
        reviewsService.deleteReviewById(id);
        log.info("Delete review with id of: " + id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping
    public ResponseEntity<Review> updateReview(@RequestBody Review review) throws ReviewNotFoundException{
        log.info("Update review");
        return ResponseEntity.status(HttpStatus.OK).body(reviewsService.updateReview(review));
    }
}
