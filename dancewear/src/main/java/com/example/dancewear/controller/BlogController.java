package com.example.dancewear.controller;

import com.example.dancewear.entity.Blog;
import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.BlogAlreadyExistsException;
import com.example.dancewear.exceptions.BlogNotFoundException;
import com.example.dancewear.exceptions.UserAlreadyExistsException;
import com.example.dancewear.exceptions.UserNotFoundException;
import com.example.dancewear.service.BlogService;
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
@RequestMapping("/api/blog")
public class BlogController {


        private static final Logger log = LoggerFactory.getLogger("BlogController.class");
        @Autowired
        private BlogService blogService;

        @CrossOrigin(origins = "http://localhost:3000")
        @GetMapping
        public List<Blog> getAll() {
                log.info("blogController - get all blog posts");
                return blogService.getAll();
        }

        @CrossOrigin(origins = "http://localhost:3000")
        @PostMapping
        public ResponseEntity<Void> addBlogPost(@RequestBody Blog blog) throws BlogAlreadyExistsException {
                Blog newBlog = blogService.addBlog(blog);
                URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newBlog.getBlog_id()).toUri();
                log.info("Add blog post to database");
                return ResponseEntity.created(location).build();
        }

        @CrossOrigin(origins = "http://localhost:3000")
        @GetMapping("/{id}")
        public ResponseEntity<Blog> findBlogById(@PathVariable int id) throws BlogNotFoundException {
                log.info("Find blog post by id " + id);
                return ResponseEntity.status(HttpStatus.OK).body(blogService.findBlogById(id));
        }

        @CrossOrigin(origins = "http://localhost:3000")
        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteBlogById(@PathVariable int id) throws BlogNotFoundException{
                blogService.deleteBlogById(id);
                log.info("Delete blog post with id of: " + id);
                return ResponseEntity.status(HttpStatus.OK).build();
        }

        @CrossOrigin(origins = "http://localhost:3000")
        @PutMapping
        public ResponseEntity<Blog> updateBlog(@RequestBody Blog blog) throws BlogNotFoundException{
                log.info("Update blog post");
                return ResponseEntity.status(HttpStatus.OK).body(blogService.updateBlog(blog));
        }
}
