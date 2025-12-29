// DOM Elements
const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');
const count = document.getElementById('count');
let currentStep = 1; // Track selected step value


document.addEventListener('DOMContentLoaded', () => {
    loadCount();
    updateDisplay();
    setStep(1); // Default step selection
});

// Step button handlers (from your HTML buttons)
function setStep(value) {
    currentStep = value;
    // Visual feedback for buttons
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.value) === value);
    });
}

// Event Listeners
decrementBtn.addEventListener('click', () => decrement(currentStep));
incrementBtn.addEventListener('click', () => increment(currentStep));
resetBtn.addEventListener('click', () => reset());

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
    count.style.color = currentCount > 1 ? 'green' : 'black';
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
