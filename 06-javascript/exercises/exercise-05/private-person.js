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
console.log(person.getName());     
console.log(person.getAge());      
person.birthday();
console.log(person.getAge());      
person.setAge(200);                
console.log(person.getAge());      
person.setAge(30);
console.log(person.getAge());      
console.log(person.introduce());   
console.log(person.name);          
console.log(person.age);
