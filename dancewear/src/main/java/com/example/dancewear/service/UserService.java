package com.example.dancewear.service;

import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.UserAlreadyExistsException;
import com.example.dancewear.exceptions.UserNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    private static final Logger log = LoggerFactory.getLogger("UserService.class");

    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    public List<User> getAll() {
        log.info("User Service - get all");
        return userRepository.findAll();
    }

    public void deleteAll() throws UserNotFoundException {
        userRepository.deleteAll();
    }

    public void deleteUserById(int id) throws UserNotFoundException  {
        if(!userRepository.existsById(id)){
            log.warn("Unable to delete user with id of: " + id);
            throw new UserNotFoundException("Id: " + id +" doesn't exist");
        }
        log.info("Delete user with id of: " + id);
        userRepository.deleteById(id);
    }

    public User addUser(User user) throws UserAlreadyExistsException {
        if (!userRepository.existsById(user.getUser_id())) {
            log.info("Add User to database");
            return userRepository.save(user);
        }
        log.warn("Unable to add user, id in use");
        throw new UserAlreadyExistsException("User with Id: " + user.getUser_id() + " already exists");
    }

    public User updateUser(User user) throws UserNotFoundException {
        if (userRepository.existsById(user.getUser_id())) {
            log.info("Update user");
            return userRepository.save(user);
        }
        log.warn("Unable to update user, no id found");
        throw new UserNotFoundException("No job exists with id: " + user.getUser_id());
    }

    public User findUserById(int id) throws UserNotFoundException {
        Optional<User> fetchedUser = userRepository.findById(id);
        if (fetchedUser.isPresent()) {
            log.info("Return user with id of: " + id);
            return fetchedUser.get();
        }
        log.warn("Unable to get user - user not in db");
        throw new UserNotFoundException("No user exists with id: " + id);
    }
}