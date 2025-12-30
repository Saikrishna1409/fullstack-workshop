const printPyramid = (n) => {
    const rows = Array.from({ length: n }, (_, i) => i + 1);
    
    rows.forEach((rowNum) => {
        const spaces = ' '.repeat(n - rowNum);
        const numbersAsc = Array.from({ length: rowNum }, (_, i) => i + 1).join('');
        const numbersDesc = Array.from({ length: rowNum - 1 }, (_, i) => rowNum - 1 - i).join('');
        
        console.log(`${spaces}${numbersAsc}${numbersDesc}`);
    });
};

printPyramid(5);
