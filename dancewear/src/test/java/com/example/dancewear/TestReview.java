package com.example.dancewear;

import com.example.dancewear.entity.Review;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestReview {

    @Test
    public void testGettersAndSetters() {
        Review review  = new Review();
        review.setTitle("test");
        review.setDescription("description");

        assertEquals("test", review.getTitle());
        assertEquals("description", review.getDescription());
    }
}
