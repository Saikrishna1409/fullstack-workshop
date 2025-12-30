const findPrimes = (limit) => {
    if (limit < 2) return [];
    
    const isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return Array.from({ length: limit + 1 }, (_, i) => i)
        .filter(i => isPrime[i]);
};

const primes = findPrimes(30);
console.log(`Primes up to 30: [${primes.join(', ')}]`);

alert(`Found ${primes.length} primes ≤ 30: ${primes.join(', ')}`);
