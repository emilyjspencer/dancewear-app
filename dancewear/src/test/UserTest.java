package test;

import static org.junit.Assert.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import com.example.dancewear.entity.User;
import com.example.dancewear.service.UserService;
import org.junit.Test;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class UserTest {

    @Autowired
    UserService userService;

    @Test
    void test_ThatAllUsersCanBeRetrieved() {
        int numberBeforeAdding = userService.retrieveAll().size();
       User user = new User();
        userService.create(user);
        User user2 = new User();
        userService.create(user2);
        int numberAfterAdding = userService.retrieveAll().size();
        assertNotEquals(numberAfterAdding, numberBeforeAdding);
    }