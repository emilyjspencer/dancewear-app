package com.example.dancewear.service;

import com.example.dancewear.dao.BlogRepository;
import com.example.dancewear.dao.ProductRepository;
import com.example.dancewear.entity.Blog;
import com.example.dancewear.entity.Product;
import com.example.dancewear.exceptions.BlogAlreadyExistsException;
import com.example.dancewear.exceptions.BlogNotFoundException;
import com.example.dancewear.exceptions.ProductAlreadyExistsException;
import com.example.dancewear.exceptions.ProductNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    private static final Logger log = LoggerFactory.getLogger("ProductService.class");

    public ProductService(ProductRepository productRepository) {

        this.productRepository = productRepository;
    }

    public List<Product> getAll() {
        log.info("ProductService - get all");
        return productRepository.findAll();
    }

    public void deleteProductById(int id) throws ProductNotFoundException {
        if(!productRepository.existsById(id)){
            log.warn("Unable to delete product with id of: " + id);
            throw new ProductNotFoundException("Id: " + id +" doesn't exist");
        }
        log.info("Delete product with id of: " + id);
        productRepository.deleteById(id);
    }

    public Product addProduct(Product product) throws ProductAlreadyExistsException {
        if (!productRepository.existsById(product.getProduct_id())) {
            log.info("Add product to database");
            return productRepository.save(product);
        }
        log.warn("Unable to add product, id in use");
        throw new ProductAlreadyExistsException("Product with Id: " + product.getProduct_id() + " already exists");
    }

    public Product updateProduct(Product product) throws ProductNotFoundException {
        if (productRepository.existsById(product.getProduct_id())) {
            log.info("Update product");
            return productRepository.save(product);
        }
        log.warn("Unable to update product, no id found");
        throw new ProductNotFoundException("No product exists with id: " + product.getProduct_id());
    }

    public Product findProductById(int id) throws ProductNotFoundException {
        Optional<Product> fetchedProduct = productRepository.findById(id);
        if (fetchedProduct.isPresent()) {
            log.info("Return product with id of: " + id);
            return fetchedProduct.get();
        }
        log.warn("Unable to get product - product not not in database");
        throw new ProductNotFoundException("No product exists with id: " + id);
    }
}
