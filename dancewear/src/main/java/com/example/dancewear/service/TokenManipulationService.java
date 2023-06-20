package com.example.dancewear.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class TokenManipulationService {

    private static final String SECRET = "BO2lir6x2mcLV6NWgaJudN4i0WrhKYz8EpjwgYgBC1Fd+OPzTCOdbhZKgFLRHR2v\n";

        public String getUsername(String token) {
            return "testing";
        }

    private Key getKey() {

        byte[] keyBytes = Decoders.BASE64.decode(SECRET);

        return Keys.hmacShaKeyFor(keyBytes); // algorithm
    }





}

