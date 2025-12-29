function createPipeline(...operations) {
    return function(data) {
        return operations.reduce((result, operation) => operation(result), data);
    };
}


const products = [
    { name: 'Blender', price: 99, inStock: true },
    { name: 'Headphones', price: 149, inStock: true },
    { name: 'Bookshelf', price: 79, inStock: true },
    { name: 'Laptop', price: 999, inStock: false },
    { name: 'Mouse', price: 29, inStock: true },
    { name: 'Keyboard', price: 89, inStock: false }
];

const filterInStock = products => products.filter(p => p.inStock);
const sortByPrice = products => [...products].sort((a, b) => a.price - b.price);
const getNames = products => products.map(p => p.name);
const takeFirst = n => items => items.slice(0, n);

const getTopCheapestInStock = createPipeline(
    filterInStock,
    sortByPrice,
    takeFirst(3),
    getNames
);

console.log(getTopCheapestInStock(products));
