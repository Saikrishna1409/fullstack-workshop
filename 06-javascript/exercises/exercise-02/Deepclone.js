const original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'gaming']
};

const deepClone = (obj) => {
    if (typeof structuredClone !== 'undefined') {
        return structuredClone(obj);
    }

    if (obj === null || typeof obj !== 'object') return obj;
    
    return Array.isArray(obj) 
        ? obj.map(deepClone)
        : Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
          );
};

const cloned = deepClone(original);
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(`Original city: ${original.address.city}`);
console.log(`Original hobbies: ${original.hobbies.join(', ')}`);
