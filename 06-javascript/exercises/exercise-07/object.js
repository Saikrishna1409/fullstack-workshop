
// Problem 1.1: Book Object
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    isRead: false,
    getSummary() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
};

console.log(book.title);        // "The Hobbit"
console.log(book.getSummary()); // "The Hobbit by J.R.R. Tolkien, 310 pages"

// Problem 1.2: Nested Property Access

function getProperty(obj, path) {
    return path.split('.').reduce((current, key) => 
        current && current[key] !== undefined ? current[key] : undefined, 
        obj
    );
}

const user = {
    name: 'Alice',
    address: {
        city: 'Seattle',
        zip: '98101'
    }
};

console.log(getProperty(user, 'name'));           // 'Alice'
console.log(getProperty(user, 'address.city'));   // 'Seattle'
console.log(getProperty(user, 'address.country')); // undefined
console.log(getProperty(user, 'phone.number'));   // undefined


// Problem 2.1: Counter Object
const counter = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    reset() {
        this.count = 0;
    },
    getCount() {
        return this.count;
    }
};

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
counter.decrement();
console.log(counter.getCount()); // 1
counter.reset();
console.log(counter.getCount()); // 0

// Problem 2.2: Calculator Object
const calc = {
    result: 0,
    add(n) {
        this.result += n;
        return this;
    },
    subtract(n) {
        this.result -= n;
        return this;
    },
    multiply(n) {
        this.result *= n;
        return this;
    },
    divide(n) {
        if (n !== 0) {
            this.result /= n;
        }
        return this;
    },
    getResult() {
        return this.result;
    },
    reset() {
        this.result = 0;
        return this;
    }
};

const result = calc.add(10).subtract(2).multiply(3).divide(4).getResult();
console.log(result); // 6


// Problem 3.1: Basic Destructuring
const product = {
    id: 101,
    name: 'Laptop',
    price: 999,
    specs: {
        ram: '16GB',
        storage: '512GB SSD'
    }
};

const { name, price, specs: { ram } } = product;

console.log(name);  // 'Laptop'
console.log(price); // 999
console.log(ram);   // '16GB'

// Problem 3.2: Destructuring with Defaults and Renaming
const config = {
    theme: 'dark',
    fontSize: 14
};

const { 
    theme: colorTheme, 
    fontSize, 
    language = 'en', 
    debugMode = false 
} = config;

console.log(colorTheme); // 'dark'
console.log(fontSize);   // 14
console.log(language);   // 'en'
console.log(debugMode);  // false

// Problem 3.3: Function Parameter Destructuring
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'editor' }
];

function formatUser({ name, role = 'user', email }) {
    return `${name} (${role}): ${email}`;
}

users.forEach(user => console.log(formatUser(user)));



// Problem 4.1: Merge Objects
const defaults = { theme: 'light', notifications: true, language: 'en' };
const userPrefs = { theme: 'dark', fontSize: 16 };

const finalSettings = {
    ...defaults,
    ...userPrefs,
    timestamp: new Date().toISOString()
};

console.log(finalSettings);
// { theme: 'dark', notifications: true, language: 'en', fontSize: 16, timestamp: ... }

// Problem 4.2: Object Transformation
const students = [
    { id: 1, name: 'Alice', scores: [85, 90, 78] },
    { id: 2, name: 'Bob', scores: [70, 75, 80] },
    { id: 3, name: 'Charlie', scores: [90, 95, 88] }
];

function transformStudents(students) {
    return students.reduce((acc, student) => {
        const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
        acc[student.name] = Math.round(avgScore * 100) / 100;
        return acc;
    }, {});
}

console.log(transformStudents(students));
// { Alice: 84.33, Bob: 75, Charlie: 91 }