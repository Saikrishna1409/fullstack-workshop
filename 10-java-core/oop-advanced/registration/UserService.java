package java_core.oop_advanced.registration;


import java.util.HashSet;
import java.util.Set;

public class UserService {

    private static final Set<String> EMAIL_DB = new HashSet<>();

    public void register(User user)
            throws ValidationException, DuplicateUserException {

        var errors = user.validate();
        if (!errors.isEmpty()) {
            throw new ValidationException(errors);
        }

        if (EMAIL_DB.contains(user.getEmail())) {
            throw new DuplicateUserException("Email already registered");
        }

        EMAIL_DB.add(user.getEmail());
    }

    public User findByEmail(String email) throws DatabaseException {
        try (DummyResource r = new DummyResource()) {
            if (!EMAIL_DB.contains(email)) {
                throw new DatabaseException("User not found");
            }
            return null;
        }
    }

    // Dummy resource to demonstrate try-with-resources
    static class DummyResource implements AutoCloseable {
        public void close() {}
    }
}

