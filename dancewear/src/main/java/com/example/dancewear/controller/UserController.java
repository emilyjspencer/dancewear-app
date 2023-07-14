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


    @GetMapping
    public List<User> getAll() {
        log.info("UserController - get all users");
        return userService.getAll();
    }

    @PostMapping
    public ResponseEntity<Void> addUser(@RequestBody User user) throws UserAlreadyExistsException {
        User newUser = userService.addUser(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newUser.getUser_id()).toUri();
        log.info("Add User to database");
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id) throws UserNotFoundException {
        log.info("Find user by id " + id);
        return ResponseEntity.status(HttpStatus.OK).body(userService.findUserById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable int id) throws UserNotFoundException{
        userService.deleteUserById(id);
        log.info("Delete user with id of: " + id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("")
    public ResponseEntity<Void> deleteAll() throws UserNotFoundException {
        userService.deleteAll();
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) throws UserNotFoundException{
        log.info("Update user");
        return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(user));
    }


}
