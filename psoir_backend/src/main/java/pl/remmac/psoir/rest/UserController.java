package pl.remmac.psoir.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.remmac.psoir.entities.User;
import pl.remmac.psoir.services.UserService;

@RestController
@RequestMapping("user")
public class UserController {

    private int counter = 0;

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("test")
    public User addTester() {
        User result = userService.addUser(
                new User(String.format("Tester #%s", counter)));
        counter++;
        return result;
    }
}
