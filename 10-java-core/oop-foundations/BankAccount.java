class BankAccount {

   
    static String bankName = "MyBank";
    static int totalAccounts = 0;
    static int accountCounter = 1000; 

   
    int accountNumber;
    String holderName;
    double balance;

   
    BankAccount(String holderName, double balance) {
        this.holderName = holderName;
        this.balance = balance;
        this.accountNumber = ++accountCounter;
        totalAccounts++;
    }

   
    void deposit(double amount) {
        balance += amount;
    }

   
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient balance");
        }
    }

  
    double getBalance() {
        return balance;
    }

    
    static String getBankInfo() {
        return bankName + " - Total Accounts: " + totalAccounts;
    }

    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount("Alice", 1000);
        BankAccount acc2 = new BankAccount("Bob", 500);

        System.out.println(BankAccount.getBankInfo());
        
    }
}
