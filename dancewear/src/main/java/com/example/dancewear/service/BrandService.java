package com.example.dancewear.service;

import com.example.dancewear.dao.BrandRepository;
import com.example.dancewear.entity.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {

    private BrandRepository brandRepository;

    @Autowired
    public BrandService(BrandRepository brandRepository) {
        super();
        this.brandRepository = brandRepository;
    }

    public List<Brand> getAll() {

        return brandRepository.findAll();
    }
}
