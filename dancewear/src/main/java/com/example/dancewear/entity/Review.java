package com.example.dancewear.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Entity
@Data
public class Review {

    @Id
    private int review_id;

    private String title;

    private String description;

    private Integer stars;

    private Date posted_date;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "author_id")
    private GeneralUser user;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    private Product product;


    public int getReview_id() { return review_id; }


    public void setReview_id(int review_id) { this.review_id = review_id; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public int getStars() { return stars; }

    public void setStars(int stars) { this.stars = stars; }

    public Date getPosted_date() { return posted_date; }


    public void setPosted_date(Date posted_date) { this.posted_date = posted_date; }


    public GeneralUser getUser() { return user;  }

    public void setUser(GeneralUser user) {  this.user = user;}


    public Product getProduct() { return product; }

    public void setProduct(Product product) { this.product = product; }

    public Review() {}

    @Override
    public String toString() {
        return "Review [review_id=" + review_id + ", title=" + title + ", description=" + description

                + ", stars=" + stars + ", posted_date=" + posted_date + ", user=" + user + ", product=" + product
                + "]";
    }
}
