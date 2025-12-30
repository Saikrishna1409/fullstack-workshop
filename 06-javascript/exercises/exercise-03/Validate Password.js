const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 8) errors.push('Too short');
    
    const hasUpper = password.match(/[A-Z]/);
    if (!hasUpper) errors.push('Missing Uppercase');
    
    const hasLower = password.match(/[a-z]/);
    if (!hasLower) errors.push('Missing lowercase');
    
    const hasSpecial = password.match(/[!@#$%^&*]/);
    if (!hasSpecial) errors.push('Missing special character');
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

const tests = [
    { password: 'Abc123!@', expected: true },
    { password: 'abc', expected: false }
];

tests.forEach(({ password, expected }, i) => {
    const result = validatePassword(password);
    const status = result.isValid === expected ? '✅' : '❌';
    console.log(`Test ${i + 1}: "${password}" → ${status} ${result.isValid ? 'Valid' : `Errors: [${result.errors.join(', ')}]`}`);
});
