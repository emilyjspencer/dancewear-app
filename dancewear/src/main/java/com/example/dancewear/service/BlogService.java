package com.example.dancewear.service;

import com.example.dancewear.dao.BlogRepository;
import com.example.dancewear.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {

    private BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {
        super();
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAll() {

        return blogRepository.findAll();
    }
}
