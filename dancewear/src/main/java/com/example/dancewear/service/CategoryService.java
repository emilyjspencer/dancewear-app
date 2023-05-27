package com.example.dancewear.service;

import com.example.dancewear.dao.CategoryRepository;
import com.example.dancewear.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAll() {

        return categoryRepository.findAll();
    }
}
