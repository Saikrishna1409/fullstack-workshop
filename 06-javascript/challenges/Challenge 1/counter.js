// DOM Elements
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');
const resetbtn = document.getElementById('reset-btn');
const count = document.getElementById('count');
const stepinput = document.querySelectorAll('step-input');

// Initialize counter
document.addEventListener('DOMContentLoaded', () => {
    loadCount();
    updateDisplay();
});

// Event Listeners
decrementBtn.addEventListener('click', () => {
    const step = parseInt(document.getElementById('step-input').value) || 1;
    decrement(step);
});
incrementBtn.addEventListener('click', () => {
    const step = parseInt(document.getElementById('step-input').value) || 1;
    increment(step);
});
resetbtn.addEventListener('click', () => {
    reset();
});
// Counter Logic
let currentCount = 0;
const loadCount = () => {
    const savedCount = localStorage.getItem('counterValue');
    currentCount = savedCount ? parseInt(savedCount) : 0;
};

const saveCount = () => {
    localStorage.setItem('counterValue', currentCount);
};
const updateDisplay = () => {
    count.textContent = currentCount;
    let currentcolor;
    if (currentCount > 1) {
        currentcolor = 'green';
    } else {
        currentcolor = 'black';
    }
    count.style.color = currentcolor;
};
const decrement = (step) => {
    currentCount = Math.max(0, currentCount - step);
    saveCount();
    updateDisplay();
};
const increment = (step) => {
    currentCount += step;
    saveCount();
    updateDisplay();
};
const reset = () => {
    currentCount = 0;
    saveCount();
    updateDisplay();
};
