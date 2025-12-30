// Compose: right → left
const compose = (...fns) => (value) =>
  fns.reduceRight((result, fn) => fn(result), value);

// Pipe: left → right
const pipe = (...fns) => (value) =>
  fns.reduce((result, fn) => fn(result), value);


const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composed = compose(addOne, double, square);
console.log(`Compose result: ${composed(3)}`);


const piped = pipe(square, double, addOne);
console.log(`Pipe result: ${piped(3)}`);
