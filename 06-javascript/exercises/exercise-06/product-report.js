const products = [
    { name: 'Blender', price: 99, rating: 4.2, inStock: true, category: 'Kitchen' },
    { name: 'Headphones', price: 149, rating: 4.7, inStock: true, category: 'Electronics' },
    { name: 'Bookshelf', price: 79, rating: 4.1, inStock: true, category: 'Furniture' },
    { name: 'Laptop', price: 999, rating: 4.8, inStock: false, category: 'Electronics' },
    { name: 'Mouse', price: 29, rating: 4.0, inStock: true, category: 'Electronics' },
    { name: 'Keyboard', price: 89, rating: 4.6, inStock: false, category: 'Electronics' }
];

function generateProductReport(products) {
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = totalValue / totalProducts;
    const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;


    const byCategory = {};
    products.forEach(p => {
        if (!byCategory[p.category]) {
            byCategory[p.category] = { count: 0, totalValue: 0, products: [] };
        }
        byCategory[p.category].count++;
        byCategory[p.category].totalValue += p.price;
        byCategory[p.category].products.push(p);
    });

    const inStockCount = products.filter(p => p.inStock).length;
    const outOfStockCount = totalProducts - inStockCount;
    const inStockPercentage = ((inStockCount / totalProducts) * 100).toFixed(1);


    const priceRanges = {
        budget: products.filter(p => p.price < 100).length,
        midRange: products.filter(p => p.price >= 100 && p.price <= 500).length,
        premium: products.filter(p => p.price > 500).length
    };

    const topRated = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    const recommendations = products.filter(p => p.rating >= 4.5 && p.inStock);

    return {
        totalProducts,
        totalValue: Math.round(totalValue),
        averagePrice: Math.round(averagePrice),
        averageRating: Math.round(averageRating * 10) / 10,

        byCategory,

        stockStatus: {
            inStock: inStockCount,
            outOfStock: outOfStockCount,
            inStockPercentage
        },

        priceRanges,

        topRated,

        recommendations
    };
}

console.log(generateProductReport(products));