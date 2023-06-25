package com.example.dancewear.controller;



import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.UserAlreadyExistsException;
import com.example.dancewear.exceptions.UserNotFoundException;
import com.example.dancewear.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger("UsersController.class");
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<User> getAll() {
        log.info("UserController - get all users");
        return userService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<Void> addUser(@RequestBody User user) throws UserAlreadyExistsException {
        User newUser = userService.addUser(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newUser.getId()).toUri();
        log.info("Add User to database");
        return ResponseEntity.created(location).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id) throws UserNotFoundException {
        log.info("Find user by id " + id);
        return ResponseEntity.status(HttpStatus.OK).body(userService.findUserById(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobById(@PathVariable int id) throws UserNotFoundException{
        userService.deleteUserById(id);
        log.info("Delete user with id of: " + id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) throws UserNotFoundException{
        log.info("Update user");
        return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(user));
    }

}
