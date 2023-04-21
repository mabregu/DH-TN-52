document.addEventListener('DOMContentLoaded', () => renderCart());

const renderCart = () => {
    let cart = getCart();
    
    cart.forEach(product => {
        renderProduct(product);
        contentProducts.innerHTML += `
            <span>Cantidad: ${product.quantity}</span>
            <button onclick="removeItem(${product.id})">Eliminar</button>
        `;
    });
    
    contentProducts.innerHTML += `
        <p>Total: ${getTotal()}</p>
        <br><button onclick="clearCart()">Limpiar carrito</button>
    `;
}

function clearCart() {
    localStorage.clear()
    
    location.reload()
}

function removeItem(productId, qyt = null) {
    let cart = getCart();

    let newCart = cart.filter(product => product.id != productId)
    
    saveCart(newCart);
    
    location.reload()
}

function getTotal() {
    let cart = getCart();
    let total = 0;
    
    cart.forEach(product => total += product.price * product.quantity);
    
    return total
}