let contentProducts = document.getElementById('products');

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function productExist(product, cart) {
    return cart.find(item => item.id == product.id)
}

// renderizar el producto
const renderProduct = (product) => {
    contentProducts.innerHTML += `
        <h3>${product.title}</h3>
        <small>$${product.price}</small>
        <img src="${product.image}" width="150">
        <br>
    `;
}