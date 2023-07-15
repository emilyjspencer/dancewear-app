package com.example.dancewear.controller;


import com.example.dancewear.entity.Blog;
import com.example.dancewear.entity.Product;
import com.example.dancewear.exceptions.BlogAlreadyExistsException;
import com.example.dancewear.exceptions.BlogNotFoundException;
import com.example.dancewear.exceptions.ProductAlreadyExistsException;
import com.example.dancewear.exceptions.ProductNotFoundException;
import com.example.dancewear.service.BlogService;
import com.example.dancewear.service.ProductService;
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
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private static final Logger log = LoggerFactory.getLogger("ProductController.class");
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAll() {
        log.info("ProductController - get all products");
        return productService.getAll();
    }

    @PostMapping
    public ResponseEntity<Void> addProduct(@RequestBody Product product) throws ProductAlreadyExistsException {
        Product newProduct = productService.addProduct(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newProduct.getProduct_id()).toUri();
        log.info("Add product to database");
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable int id) throws ProductNotFoundException {
        log.info("Find product by id " + id);
        return ResponseEntity.status(HttpStatus.OK).body(productService.findProductById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductById(@PathVariable int id) throws ProductNotFoundException{
        productService.deleteProductById(id);
        log.info("Delete product with id of: " + id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable int id) throws ProductNotFoundException{
        log.info("Update product]");
        return ResponseEntity.status(HttpStatus.OK).body(productService.updateProduct(product));
    }
}



