function once(fn) {
    let hasRun = false;
    let result;
    
    return function(...args) {
        if (!hasRun) {
            hasRun = true;
            result = fn(...args);
            return result;
        }
        return result;
    };
}

const initialize = once(() => {
    console.log('Initializing...');
    return 'Initialized';
});

console.log(initialize()); // "Initializing...
console.log(initialize()); // Just "Initialized"
console.log(initialize()); // Just "Initialized"
