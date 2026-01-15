package java_core.oop_advanced.payment;

public interface Taxable {
    double calculateTax();

    static double getTaxRate() {
        return 0.18; // 18%
    }
}
