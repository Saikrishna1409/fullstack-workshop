package java_core.collections_streams.optional;


import java.util.Optional;

public class Address {

    private String apartment;

    public Address(String apartment) {
        this.apartment = apartment;
    }

    public Optional<String> getApartment() {
        return Optional.ofNullable(apartment);
    }
}

