package com.example.dancewear.controller;

import com.example.dancewear.entity.Brand;
import com.example.dancewear.exceptions.*;
import com.example.dancewear.service.BrandService;
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
@RequestMapping( "/api/brands")
public class BrandController {

    private static final Logger log = LoggerFactory.getLogger("BrandController.class");
    @Autowired
    private BrandService brandService;


    @GetMapping
    public List<Brand> getAll() {
        log.info("BrandController - get all brands");
        return brandService.getAll();
    }

    @PostMapping()
    public ResponseEntity<Void> addBrand(@RequestBody Brand brand) throws BrandAlreadyExistsException {
        log.info(brand.toString());
        Brand newBrand = brandService.addBrand(brand);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newBrand.getBrand_id()).toUri();
        log.info("Add new brand to database");
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Brand> findBrandById(@PathVariable int id) throws BrandNotFoundException {
        log.info("Find brand by id " + id);
        return ResponseEntity.status(HttpStatus.OK).body(brandService.findBrandById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBrandById(@PathVariable int id) throws BrandNotFoundException{
        brandService.deleteBrandById(id);
        log.info("Delete brand with id of: " + id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("")
    public ResponseEntity<Void> deleteAll() throws BrandNotFoundException {
        brandService.deleteAll();
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Brand> updateBrand(@RequestBody Brand brand, @PathVariable int id) throws BrandNotFoundException {
        log.info("Update review");
        return ResponseEntity.status(HttpStatus.OK).body(brandService.updateBrand(brand));
    }
}
