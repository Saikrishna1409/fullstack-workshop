function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
}

function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

console.log(myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]
console.log(myFilter([1, 2, 3, 4], x => x > 2)); // [3, 4]
console.log(myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)); // 10
