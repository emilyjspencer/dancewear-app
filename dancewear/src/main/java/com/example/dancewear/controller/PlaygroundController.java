package com.example.dancewear.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @RestController
    @RequestMapping("/api/playground-controller")
    public class PlaygroundController {

        @GetMapping
        public ResponseEntity<String> sayHello() {
            return ResponseEntity.ok("testing 111");
        }

    }

