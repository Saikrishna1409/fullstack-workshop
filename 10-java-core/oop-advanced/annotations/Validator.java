package java_core.oop_advanced.annotations;


import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class Validator {

    public static List<String> validate(Object obj) {
        List<String> errors = new ArrayList<>();

        if (obj == null) {
            errors.add("Object is null");
            return errors;
        }

        Class<?> clazz = obj.getClass();
        Field[] fields = clazz.getDeclaredFields();

        for (Field field : fields) {
            field.setAccessible(true);

            try {
                Object value = field.get(obj);

                // @NotNull validation
                if (field.isAnnotationPresent(NotNull.class)) {
                    NotNull notNull = field.getAnnotation(NotNull.class);
                    if (value == null) {
                        errors.add(notNull.message());
                    }
                }

                // @Validate validation
                if (field.isAnnotationPresent(Validate.class)) {
                    Validate validate = field.getAnnotation(Validate.class);

                    if (value instanceof Integer) {
                        int intValue = (int) value;
                        if (intValue < validate.min() || intValue > validate.max()) {
                            errors.add(validate.message());
                        }
                    }
                }

            } catch (IllegalAccessException e) {
                errors.add("Validation error on field: " + field.getName());
            }
        }
        return errors;
    }
}
