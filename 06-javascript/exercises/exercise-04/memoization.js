const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

const expensiveOperation = (n) => {
    console.log('Computing...');
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) result += i;
    return result;
};

const memoizedOperation = memoize(expensiveOperation);
console.log(memoizedOperation(5));  
console.log(memoizedOperation(5));  
console.log(memoizedOperation(10)); 
console.log(memoizedOperation(10)); 
