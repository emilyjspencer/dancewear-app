package com.example.dancewear.service;

import com.example.dancewear.dao.BasketRepository;
import com.example.dancewear.entity.Basket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BasketService {

    private BasketRepository basketRepository;

    @Autowired
    public BasketService(BasketRepository basketRepository) {
        super();
        this.basketRepository = basketRepository;
    }

    public List<Basket> getAll() {

        return basketRepository.findAll();
    }
}


