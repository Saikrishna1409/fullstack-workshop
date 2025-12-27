function createPerson(name, age) {
    // Private variables
    let _name = name;
    let _age = age;
    
    // Private validation
    const validateAge = (newAge) => newAge >= 0 && newAge <= 150;
    const validateName = (newName) => typeof newName === 'string' && newName.trim().length > 0;
    
    return {
        getName: function() {
            return _name;
        },
        
        getAge: function() {
            return _age;
        },
        
        setName: function(newName) {
            if (validateName(newName)) {
                _name = newName.trim();
            }
        },
        
        setAge: function(newAge) {
            if (validateAge(newAge)) {
                _age = newAge;
            }
        },
        
        birthday: function() {
            if (validateAge(_age + 1)) {
                _age++;
            }
        },
        
        introduce: function() {
            return `Hi, I'm ${_name} and I'm ${_age} years old.`;
        }
    };
}

const person = createPerson('Sai', 23);
console.log(person.getName());     // "John"
console.log(person.getAge());      // 23
person.birthday();
console.log(person.getAge());      // 24
person.setAge(200);                // Should fail validation
console.log(person.getAge());      // Still 24
person.setAge(30);
console.log(person.getAge());      // 30
console.log(person.introduce());   // "Hi, I'm Sai and I'm 30 years old."
console.log(person.name);          // undefined (private)
console.log(person.age);           // undefined (private)
