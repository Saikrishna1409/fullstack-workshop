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

console.log(initialize()); // "Initializing..." then "Initialized"
console.log(initialize()); // Just "Initialized" (no log, cached result)
console.log(initialize()); // Just "Initialized"
