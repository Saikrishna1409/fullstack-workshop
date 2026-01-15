package java_core.collections_streams.optional;


public class OptionalTest {

    public static void main(String[] args) {

        UserRepository repository = new UserRepository();

   


        String apartment = repository.findById(1L)
                .flatMap(User::getAddress)
                .flatMap(Address::getApartment)
                .orElse("N/A");

        System.out.println(apartment); // A-101
    }
}

