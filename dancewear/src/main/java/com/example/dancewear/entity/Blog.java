package com.example.dancewear.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.Cascade;


import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
public class Blog {

    @Id
    private int blog_id;

    private String title;

    private String post;

    private LocalDate date_published;

    public Blog() {}

    public int getBlog_id() { return blog_id; }

    public void setBlog_id(int blog_id) { this.blog_id = blog_id; }

    public String getPost() { return post; }

    public void setPost(String post) { this.post = post; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }


    public LocalDate getDate_published() { return date_published; }

    public void setDate_published(LocalDate date_published) { this.date_published = date_published; }


    @Override
    public String toString() {
        return "Blog [blog_id=" + blog_id + ", post=" + post + ", title=" + title

                +  ", date_published=" + date_published
                + "]";
    }

}
