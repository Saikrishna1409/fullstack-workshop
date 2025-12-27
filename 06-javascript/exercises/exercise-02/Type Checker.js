function getType(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    if (typeof value === "object") return "object";
    return typeof value;
}

console.log(getType(42)); 
console.log(getType("Hello"));
console.log(getType(true));
