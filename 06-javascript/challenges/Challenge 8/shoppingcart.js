
function createShoppingCart() {
    const items = [];
    let discountPercent = 0;

    return {
        addItem(item) {
            const existingItem = items.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                items.push({ ...item });
            }
        },

        updateQuantity(id, quantity) {
            const item = items.find(i => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },

        removeItem(id) {
            const index = items.findIndex(i => i.id === id);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        getItems() {
            return [...items];
        },

        getTotal() {
            const subtotal = items.reduce((total, item) => 
                total + (item.price * item.quantity), 0);
            return subtotal * (1 - discountPercent / 100);
        },

        getItemCount() {
            return items.reduce((total, item) => total + item.quantity, 0);
        },

        isEmpty() {
            return items.length === 0;
        },

        applyDiscount(code, percent) {
            if (code === 'SAVE10') {
                discountPercent = percent;
            }
        },

        clear() {
            items.length = 0;
            discountPercent = 0;
        }
    };
}
const cart = createShoppingCart();
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
console.log(cart.getItems()); 
console.log(cart.getTotal());