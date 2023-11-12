package com.example.dancewear;

import com.example.dancewear.dao.GeneralUserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


    @SpringBootTest
    @AutoConfigureMockMvc
    public class TestAuthenticationController {

        @Autowired
        private MockMvc mockMvc;

        @Mock
        private GeneralUserRepository userRepository;



        @Test
        @WithMockUser
        public void testLoginUser() throws Exception {

            mockMvc.perform(MockMvcRequestBuilders.post("/auth/login")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\"username\": \"testUser\", \"password\": \"password\"}"))
                    .andExpect(status().isOk());
        }


    }

