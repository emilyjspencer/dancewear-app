package com.example.dancewear.service;

import com.example.dancewear.dao.BlogRepository;
import com.example.dancewear.dao.UserRepository;
import com.example.dancewear.entity.Blog;
import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    private BlogRepository blogRepository;

    private static final Logger log = LoggerFactory.getLogger("BlogService.class");

    public BlogService(BlogRepository blogRepository) {

        this.blogRepository = blogRepository;
    }

    public List<Blog> getAll() {
        log.info("BlogService - get all");
        return blogRepository.findAll();
    }

    public void deleteBlogById(int id) throws BlogNotFoundException {
        if(!blogRepository.existsById(id)){
            log.warn("Unable to delete blog post with id of: " + id);
            throw new BlogNotFoundException("Id: " + id +" doesn't exist");
        }
        log.info("Delete blog post with id of: " + id);
        blogRepository.deleteById(id);
    }

    public void deleteAll() throws BlogNotFoundException {
        blogRepository.deleteAll();
    }

    public Blog addBlog(Blog blog) throws BlogAlreadyExistsException {
        if (!blogRepository.existsById(blog.getBlog_id())) {
            log.info("Add Blog post to database");
            return blogRepository.save(blog);
        }
        log.warn("Unable to add blog post, id in use");
        throw new BlogAlreadyExistsException("Blog post with Id: " + blog.getBlog_id() + " already exists");
    }

    public Blog updateBlog(Blog blog) throws BlogNotFoundException {
        if (blogRepository.existsById(blog.getBlog_id())) {
            log.info("Update blog");
            return blogRepository.save(blog);
        }
        log.warn("Unable to update blog post, no id found");
        throw new BlogNotFoundException("No blog post exists with id: " + blog.getBlog_id());
    }

    public Blog findBlogById(int id) throws BlogNotFoundException {
        Optional<Blog> fetchedBlogPost = blogRepository.findById(id);
        if (fetchedBlogPost.isPresent()) {
            log.info("Return blog post with id of: " + id);
            return fetchedBlogPost.get();
        }
        log.warn("Unable to get blog post- blog post not in db");
        throw new BlogNotFoundException("No blog post exists with id: " + id);
    }
}
