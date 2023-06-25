package com.example.dancewear.dao;

import com.example.dancewear.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByNameContaining(String name);

    //@Query("SELECT b FROM Product b WHERE b.brand.brand_id = :id")
    //List<Product> filterByBrand(@Param("id") int id);


    //@Query("SELECT c FROM Product c WHERE c.category LIKE %:searchCategory%")
    //List<Product> filterByCategory(@Param("searchCategory") String searchCategory);





}
