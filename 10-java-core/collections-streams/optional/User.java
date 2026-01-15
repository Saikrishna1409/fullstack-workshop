package java_core.collections_streams.optional;



import java.util.Optional;

public class User {

    private String middleName;
    private Address address;

    public User(String middleName, Address address) {
        this.middleName = middleName;
        this.address = address;
    }

    public Optional<String> getMiddleName() {
        return Optional.ofNullable(middleName);
    }

    public Optional<Address> getAddress() {
        return Optional.ofNullable(address);
    }
}

