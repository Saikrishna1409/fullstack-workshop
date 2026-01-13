class Person{
    private String name;
    private int age;
    private String email;
    public Person(){
        
    }

    public Person(String name,int age,String email){
        this.name=name;
        setAge(age);
        setEmail(email);
    }


    public void setAge(int age) {
        if(age>0 && age<150) this.age=age;
        else {
            System.out.println("Enter Valid Age");
            return;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if(email.contains("@")) this.email = email;
         else {
            System.out.println("Enter Valid mail");
            return;
        }

    }

    public void getPerson(){
        System.out.println("person name: "+this.name +" Person age : "+this.age+" person mail:"+this.email);
    }

    


 

   @Override
    public String toString() {
        return "Person [name=" + name + ", age=" + age + ", email=" + email + "]";
    }

   public static void main(String[] args) {
    Person p1 = new Person();
    Person p2 = new Person("John", 25, "john@email.com");
    p2.getPerson();
   p2.setAge(30);
//    System.out.println(p2);  // Person{name='John', age=30, email='john@email.com'}
    
   }
}