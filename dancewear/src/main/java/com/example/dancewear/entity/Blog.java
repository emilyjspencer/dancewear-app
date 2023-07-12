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

    private String body;

    private LocalDate date_published;

    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @OneToOne
    @JoinColumn(name = "author_id")
    private User user;

    public Blog() {}

    public int getBlog_id() { return blog_id; }

    public void setBlog_id(int blog_id) { this.blog_id = blog_id; }

    public String getBody() { return body; }

    public void setBody(String body) { this.body = body; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }


    public LocalDate getDate_published() { return date_published; }

    public Date setDate_published(Date date_published) { return date_published; }


    @Override
    public String toString() {
        return "Blog [blog_id=" + blog_id + ", body=" + body + ", title=" + title

                + ", user=" + user + ", date_published=" + date_published
                + "]";
    }

}
