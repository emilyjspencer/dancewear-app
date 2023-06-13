package com.example.dancewear.service;

import com.example.dancewear.dao.ProductRepository;
import com.example.dancewear.dao.ReviewsRepository;
import com.example.dancewear.entity.Product;
import com.example.dancewear.entity.Review;
import com.example.dancewear.exceptions.ProductAlreadyExistsException;
import com.example.dancewear.exceptions.ProductNotFoundException;
import com.example.dancewear.exceptions.ReviewAlreadyExistsException;
import com.example.dancewear.exceptions.ReviewNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewsService {

    private ReviewsRepository reviewsRepository;

    private static final Logger log = LoggerFactory.getLogger("ReviewsService.class");

    public ReviewsService(ReviewsRepository reviewsRepository) {

        this.reviewsRepository = reviewsRepository;
    }

    public List<Review> getAll() {
        log.info("ReviewService - get all");
        return reviewsRepository.findAll();
    }

    public void deleteReviewById(int id) throws ReviewNotFoundException {
        if(!reviewsRepository.existsById(id)){
            log.warn("Unable to delete product with id of: " + id);
            throw new ReviewNotFoundException("Id: " + id +" doesn't exist");
        }
        log.info("Delete review with id of: " + id);
        reviewsRepository.deleteById(id);
    }

    public Review addReview(Review review) throws ReviewAlreadyExistsException {
        if (!reviewsRepository.existsById(review.getId())) {
            log.info("Add review to database");
            return reviewsRepository.save(review);
        }
        log.warn("Unable to add review, id in use");
        throw new ReviewAlreadyExistsException("Review with Id: " + review.getId() + " already exists");
    }

    public Review updateReview(Review review) throws ReviewNotFoundException {
        if (reviewsRepository.existsById(review.getId())) {
            log.info("Update review");
            return reviewsRepository.save(review);
        }
        log.warn("Unable to update review, no id found");
        throw new ReviewNotFoundException("No review exists with id: " + review.getId());
    }

    public Review findReviewById(int id) throws ReviewNotFoundException {
        Optional<Review> fetchedReview = reviewsRepository.findById(id);
        if (fetchedReview.isPresent()) {
            log.info("Return review with id of: " + id);
            return fetchedReview.get();
        }
        log.warn("Unable to get review  - review not not in database");
        throw new ReviewNotFoundException("No review exists with id: " + id);
    }
}
