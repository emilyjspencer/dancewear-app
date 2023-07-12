package test;

import com.example.dancewear.entity.User;
import com.example.dancewear.exceptions.UserAlreadyExistsException;
import com.example.dancewear.service.UserService;
//import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import static org.junit.Assert.assertTrue;


@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class UserTest {

    @Autowired
    private UserService userService;



   // @Test
    void test_ThatAUserCanBeCreated() throws UserAlreadyExistsException {
        User user = new User();
        userService.addUser(user);
        assertTrue(user.getId() > 0);
    }

}