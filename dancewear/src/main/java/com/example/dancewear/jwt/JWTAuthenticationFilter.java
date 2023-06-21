package com.example.dancewear.jwt;

import com.example.dancewear.service.TokenManipulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
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

    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest
                                                httpServletRequest,
                                    HttpServletResponse httpServletResponse,
                                    FilterChain filterChain)
            throws ServletException, IOException {


         String authenticationHeader = httpServletRequest.getHeader("Authorization");
         String jwtToken;
        final String userEmail;
        if (authenticationHeader == null | !authenticationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }

        // extract bearer token from authentication header
        jwtToken = authenticationHeader.substring(7);

        userEmail = tokenManipulationService.getUsername(jwtToken);


        // if the user hasn't been authenticated - add to the securitycontextholder -
        // which stores all authenticated
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
        }
    }
}
