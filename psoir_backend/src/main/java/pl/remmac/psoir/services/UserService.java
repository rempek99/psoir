package pl.remmac.psoir.services;

import java.util.List;

import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.remmac.psoir.entities.User;
import pl.remmac.psoir.repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAll() {
        return IterableUtils.toList(userRepository.findAll());
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
