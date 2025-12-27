function createRateLimiter(fn, limit, interval) {
    let calls = [];
    
    return function(...args) {
        const now = Date.now();
        calls = calls.filter(time => now - time < interval);
        if (calls.length >= limit) {
            return false;
        }
        calls.push(now);
        return fn(...args);
    };
}

const limitedFetch = createRateLimiter(
    (url) => {
        console.log('Fetching:', url);
        return true;
    },
    3,
    1000
);

console.log(limitedFetch('/api/1')); // "Fetching: /api/1", true
console.log(limitedFetch('/api/2')); // "Fetching: /api/2", true
console.log(limitedFetch('/api/3')); // "Fetching: /api/3", true
console.log(limitedFetch('/api/4')); // false (rate limited)
