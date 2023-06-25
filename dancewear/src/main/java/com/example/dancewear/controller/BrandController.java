package com.example.dancewear.controller;

import com.example.dancewear.entity.Brand;
import com.example.dancewear.entity.Review;
import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.BrandAlreadyExistsException;
import com.example.dancewear.exceptions.BrandNotFoundException;
import com.example.dancewear.exceptions.ReviewAlreadyExistsException;
import com.example.dancewear.exceptions.ReviewNotFoundException;
import com.example.dancewear.service.BrandService;
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
@RequestMapping("/api/brands")
public class BrandController {

    private static final Logger log = LoggerFactory.getLogger("BrandController.class");
    @Autowired
    private BrandService brandService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Brand> getAll() {
        log.info("BrandController - get all brands");
        return brandService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<Void> addBrand(@RequestBody Brand brand) throws BrandAlreadyExistsException {
        Brand newBrand = brandService.addBrand(brand);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newBrand.getId()).toUri();
        log.info("Add new brand to database");
        return ResponseEntity.created(location).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<Brand> findBrandById(@PathVariable int id) throws BrandNotFoundException {
        log.info("Find brand by id " + id);
        return ResponseEntity.status(HttpStatus.OK).body(brandService.findBrandById(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBrandById(@PathVariable int id) throws BrandNotFoundException{
        brandService.deleteBrandById(id);
        log.info("Delete brand with id of: " + id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping
    public ResponseEntity<Brand> updateBrand(@RequestBody Brand brand) throws BrandNotFoundException {
        log.info("Update review");
        return ResponseEntity.status(HttpStatus.OK).body(brandService.updateBrand(brand));
    }
}
