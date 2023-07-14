package com.example.dancewear.service;

import com.example.dancewear.dao.BrandRepository;

import com.example.dancewear.entity.Brand;

import com.example.dancewear.exceptions.BrandAlreadyExistsException;
import com.example.dancewear.exceptions.BrandNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrandService {

    private BrandRepository brandRepository;

    @Autowired
    public BrandService(BrandRepository brandRepository) {
        super();
        this.brandRepository = brandRepository;
    }
    private static final Logger log = LoggerFactory.getLogger("BrandService.class");

    public List<Brand> getAll() {
        log.info("BrandService - get all");
        return brandRepository.findAll();
    }

    public void deleteBrandById(int id) throws BrandNotFoundException {
        if(!brandRepository.existsById(id)){
            log.warn("Unable to delete brand with id of: " + id);
            throw new BrandNotFoundException("Id: " + id +" doesn't exist");
        }
        log.info("Delete brand with id of: " + id);
        brandRepository.deleteById(id);
    }

    public void deleteAll() throws BrandNotFoundException {
        brandRepository.deleteAll();
    }

    public Brand addBrand(Brand brand) throws BrandAlreadyExistsException {
        if (!brandRepository.existsById(brand.getBrand_id())) {
            log.info("Add product to database");
            return brandRepository.save(brand);
        }
        log.warn("Unable to add brand, id in use");
        throw new BrandAlreadyExistsException("Brand with Id: " + brand.getBrand_id() + " already exists");
    }

    public Brand updateBrand(Brand brand) throws BrandNotFoundException {
        if (brandRepository.existsById(brand.getBrand_id())) {
            log.info("Update brand");
            return brandRepository.save(brand);
        }
        log.warn("Unable to update brand, no id found");
        throw new BrandNotFoundException("No brand exists with id: " + brand.getBrand_id());
    }

    public Brand findBrandById(int id) throws BrandNotFoundException {
        Optional<Brand> fetchedBrand = brandRepository.findById(id);
        if (fetchedBrand.isPresent()) {
            log.info("Return brand with id of: " + id);
            return fetchedBrand.get();
        }
        log.warn("Unable to get brand - brand not not in database");
        throw new BrandNotFoundException("No brand exists with id: " + id);
    }
}
