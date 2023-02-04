package pl.remmac.psoir.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
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
        try {
            return userService.addUser(
                    new User(username));
        } catch (DataIntegrityViolationException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, String.format("User with username: '%s' aready exists", username));
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id){
        try {
            userService.deleteUser(id);
        }catch (EmptyResultDataAccessException ex){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User, does not exists! Please refresh.");
        }
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @GetMapping("all")
    public List<User> getAll() {
        return userService.getAll();
    }
}
