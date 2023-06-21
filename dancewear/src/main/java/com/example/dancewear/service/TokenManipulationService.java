package com.example.dancewear.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class TokenManipulationService {

    private static final String SECRET = "BO2lir6x2mcLV6NWgaJudN4i0WrhKYz8EpjwgYgBC1Fd+OPzTCOdbhZKgFLRHR2v\n";

        public String getUsername(String token) {
            return getClaimFromToken(token, Claims::getSubject); // the subject should be the email or username
            // of the authenticated user
        }

    private Key getKey() {

        byte[] keyBytes = Decoders.BASE64.decode(SECRET);

        return Keys.hmacShaKeyFor(keyBytes); // algorithm
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    //  generate a jtw using only user details and not the extra claims
    public String generateTokenUserDetailsOnly(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);

    }

    // generate a token from extra claims and user details
    public String generateToken (Map<String, Object> extraClaims, UserDetails userDetails
    ) {
        return Jwts.builder()
                .setClaims(extraClaims)
                // subject is user info in this case username
                .setSubject(userDetails.getUsername())
                // set issued at
                .setIssuedAt(new Date(System.currentTimeMillis()))
                // set length token is valid
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 12  * 24))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact(); // generate and return the token
    }






    public boolean hasTokenExpired(String token) {

        return extractExpirationDate(token).before(new Date());
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {

        String username = getUsername(token);

        return (username.equals(userDetails.getUsername())) && !hasTokenExpired(token);
    }

    private Date extractExpirationDate(String token) {

            return getClaimFromToken(token, Claims::getExpiration);
    }

}

