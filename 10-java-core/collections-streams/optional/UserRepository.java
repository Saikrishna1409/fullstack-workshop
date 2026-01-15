package java_core.collections_streams.optional;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class UserRepository {

    private final Map<Long, User> users = new HashMap<>();

    public UserRepository() {
        users.put(1L, new User(
                "Kumar",
                new Address("A-101")
        ));
    }

    public Optional<User> findById(Long id) {
        return Optional.ofNullable(users.get(id));
    }

    public Optional<User> findByEmail(String email) {
        // Dummy implementation for requirement
        return Optional.empty();
    }
}

