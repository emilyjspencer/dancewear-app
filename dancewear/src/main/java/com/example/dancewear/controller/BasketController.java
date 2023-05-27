package com.example.dancewear.controller;

import com.example.dancewear.entity.Basket;
import com.example.dancewear.entity.User;
import com.example.dancewear.service.BasketService;
import com.example.dancewear.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/basket")
public class BasketController {

    @Autowired
    private BasketService basketService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Basket> getAll() {

        return basketService.getAll();
    }
}
