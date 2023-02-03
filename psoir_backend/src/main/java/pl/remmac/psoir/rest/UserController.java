package pl.remmac.psoir.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.remmac.psoir.entities.User;
import pl.remmac.psoir.services.UserService;

@RestController
@CrossOrigin
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

    @PostMapping("add/{username}")
    public User addTester(@PathVariable String username) {
        return userService.addUser(
                new User(username));
    }

    @GetMapping("all")
    public List<User> getAll() {
        return userService.getAll();
    }
}
