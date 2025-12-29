const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};


const handleSearch = debounce((query) => {
    console.log('Searching for:', query);
}, 300);


handleSearch('a');
handleSearch('ab');   
handleSearch('abc');
