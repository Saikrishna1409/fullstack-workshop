const swap = ([x, y]) => [y, x];

const testSwaps = [
    { a: 5, b: 10 },
    { a: 'hello', b: 'world' },
    { a: [1, 2], b: [3, 4] }
];

testSwaps.forEach(({ a, b }, i) => {
    const [x, y] = swap([a, b]);
    console.log(`Test ${i + 1}: [${a}, ${b}] → [${x}, ${y}] ✅`);
});

let x = 5;
let y = 10;
[x, y] = swap([x, y]);
alert(`After swapping: x = ${x}, y = ${y}`);
