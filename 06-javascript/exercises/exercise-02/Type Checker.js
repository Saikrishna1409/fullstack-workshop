const getType = (value) => {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value === "object" ? "object" : typeof value;
};

const testCases = [
    { value: 42, expected: "number" },
    { value: "Hello", expected: "string" },
    { value: true, expected: "boolean" }
];

testCases.forEach(({ value, expected }) => {
    const result = getType(value);
    console.log(`getType(${JSON.stringify(value)}) = "${result}" ${result === expected ? '✅' : '❌'}`);
});
