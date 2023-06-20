package com.example.dancewear.jwt;

import com.example.dancewear.service.TokenManipulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private TokenManipulationService tokenManipulationService;

    public String userEmail;
    public String jwtToken;

    @Override
    protected void doFilterInternal(HttpServletRequest
                                                httpServletRequest,
                                    HttpServletResponse httpServletResponse,
                                    FilterChain filterChain)
            throws ServletException, IOException {


         String authenticationHeader = httpServletRequest.getHeader("Authorization");
         String jwtToken;
        if (authenticationHeader == null | !authenticationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }

        // extract bearer token from authentication header
        jwtToken = authenticationHeader.substring(7);

        userEmail = tokenManipulationService.getUsername(jwtToken);
    }
}
