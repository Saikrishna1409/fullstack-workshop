const curry = (fn) => (arg, ...restArgs) => 
    restArgs.length || fn.length === 1 
        ? fn(arg, ...restArgs)
        : (...nextArgs) => curry(fn)(arg, ...nextArgs);

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

const testCases = [
    { call: 'curriedAdd(1)(2)(3)', args: [1, 2, 3], expected: 6 },
    { call: 'curriedAdd(1, 2)(3)', args: [1, 2, 3], expected: 6 },
    { call: 'curriedAdd(1)(2, 3)', args: [1, 2, 3], expected: 6 },
    { call: 'curriedAdd(1, 2, 3)', args: [1, 2, 3], expected: 6 }
];

testCases.forEach(({ call, args, expected }, i) => {
    const result = args.reduce((fn, arg) => fn(arg), curriedAdd);
    const status = result === expected ? '✅' : '❌';
    console.log(`${call} = ${result} ${status}`);
});
