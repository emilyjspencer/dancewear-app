package com.example.dancewear;

import com.example.dancewear.dao.GeneralUserRepository;
import com.example.dancewear.dao.RoleRepository;
import com.example.dancewear.entity.GeneralUser;
import com.example.dancewear.entity.UserRole;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DancewearApplication {

	public static void main(String[] args) {
		SpringApplication.run(DancewearApplication.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, GeneralUserRepository userRepository, PasswordEncoder passwordEncode){
		return args ->{
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			UserRole adminRole = roleRepository.save(new UserRole("ADMIN"));
			roleRepository.save(new UserRole("USER"));
			roleRepository.save(new UserRole("DANCE_TEACHER"));

			Set<UserRole> roles = new HashSet<>();
			roles.add(adminRole);


			GeneralUser admin = new GeneralUser();
			admin.setUsername("admin");
			admin.setPassword(passwordEncode.encode("password"));
			admin.setAuthorities(roles);
			userRepository.save(admin);
		};
	}

}
