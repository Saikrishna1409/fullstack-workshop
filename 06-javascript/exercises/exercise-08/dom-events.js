// Part 1: DOM Selection
console.log('=== Part 1: DOM Selection ===');
const app = document.getElementById('app');
const heading = document.querySelector('h1');
const navLinks = document.querySelectorAll('.nav-link');
const activeLink = document.querySelector('.nav-link.active');
const cards = document.querySelectorAll('.card');
const secondCard = document.querySelector('[data-id="2"]');
const cardParagraphs = document.querySelectorAll('.card p');

console.log('app:', app);
console.log('heading:', heading);
console.log('navLinks:', navLinks);
console.log('activeLink:', activeLink);
console.log('cards:', cards);
console.log('secondCard:', secondCard);
console.log('cardParagraphs:', cardParagraphs);


// Problem 2.1: Create and Append Elements
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;
    
    return card;
}

// Test product card
const product = { name: 'Laptop', price: 999.99, image: 'laptop.jpg' };
document.body.appendChild(createProductCard(product));

// Problem 2.2: Modify Existing Elements
function changeText(element, newText) {
    element.textContent = newText;
}

function addClass(element, className) {
    element.classList.add(className);
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}

function setStyles(element, styles) {
    Object.assign(element.style, styles);
}

function setDataAttribute(element, key, value) {
    element.dataset[key] = value;
}

// Test manipulation functions
const box = document.getElementById('box');
changeText(box, 'Hello, World!');
addClass(box, 'highlight');
toggleClass(box, 'highlight');
setStyles(box, { backgroundColor: 'blue', color: 'white', padding: '10px' });
setDataAttribute(box, 'modified', 'true');

// Problem 2.3: Remove and Replace
function removeSecondItem() {
    const list = document.getElementById('list');
    const secondItem = list.children[1];
    secondItem.remove();
}

function replaceFirstItem() {
    const list = document.getElementById('list');
    const firstItem = list.children[0];
    firstItem.textContent = 'New Item 1';
}

function insertBeforeLast(text) {
    const list = document.getElementById('list');
    const lastItem = list.lastElementChild;
    const newItem = document.createElement('li');
    newItem.textContent = text;
    list.insertBefore(newItem, lastItem);
}

function clearList() {
    const list = document.getElementById('list');
    list.innerHTML = '';
}

// Test list manipulation
removeSecondItem();
replaceFirstItem();
insertBeforeLast('New Item Before Last');
clearList();


// Problem 3.1: Basic Events
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    console.log('Button clicked!');
    btn.textContent = 'Clicked!';
});

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'yellow';
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '';
});

// Problem 3.2: Event Object
const form = document.getElementById('search-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('search-input');
    console.log('Search value:', input.value);
    input.value = '';
});

// Problem 3.3: Event Delegation
const todoList = document.getElementById('todo-list');
todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const li = event.target.closest('li');
        if (li) li.remove();
    }
});

// Problem 3.4: Keyboard Events
document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
    
    if (event.key === 'Escape') {
        const modal = document.getElementById('modal');
        modal.classList.remove('show');
    }
});


// Problem 4.1: Interactive Counter
const counter = {
    count: 0,
    updateDisplay() {
        document.getElementById('count').textContent = this.count;
        document.getElementById('decrement').disabled = this.count === 0;
    },
    increment() {
        this.count++;
        this.updateDisplay();
    },
    decrement() {
        if (this.count > 0) {
            this.count--;
            this.updateDisplay();
        }
    }
};

document.getElementById('increment').addEventListener('click', () => counter.increment());
document.getElementById('decrement').addEventListener('click', () => counter.decrement());

// Problem 4.2: Toggle Visibility
const toggleBtn = document.getElementById('toggle-btn');
const details = document.getElementById('details');

toggleBtn.addEventListener('click', () => {
    details.classList.toggle('hidden');
    toggleBtn.textContent = details.classList.contains('hidden') ? 'Show Details' : 'Hide Details';
});

// Problem 4.3: Form Validation Display
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    
    let hasErrors = false;
    
    // Validate username
    if (username.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        username.classList.add('invalid');
        hasErrors = true;
    } else {
        usernameError.textContent = '';
        username.classList.remove('invalid');
    }
    
    // Validate email
    if (!email.value.includes('@')) {
        emailError.textContent = 'Email must contain @';
        email.classList.add('invalid');
        hasErrors = true;
    } else {
        emailError.textContent = '';
        email.classList.remove('invalid');
    }
    
    if (!hasErrors) {
        console.log('Form submitted:', { username: username.value, email: email.value });
    }
});

console.log('All DOM events exercises loaded successfully!');
