package pl.remmac.psoir.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.remmac.psoir.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
