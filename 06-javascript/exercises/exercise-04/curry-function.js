const curry = (fn) => (arg, ...restArgs) => 
    restArgs.length || fn.length === 1 
        ? fn(arg, ...restArgs)
        : (...nextArgs) => curry(fn)(arg, ...nextArgs);

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6
