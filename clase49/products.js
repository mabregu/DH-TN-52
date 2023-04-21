const API = 'https://fakestoreapi.com/products';
// lsitado de productos de nuestra api
const getProducts = async (api) => {
    // magic
    try {
        const response = await fetch(api);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('algo fallo', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    getProducts(API).then(data => renderProducts(data))
});
// renderizar los productos
const renderProducts = (products) => {
    // console.log("renderProducts", products);
    products.forEach(product => {
        renderProduct(product);
        contentProducts.innerHTML += `<button onclick="addToCart(this)"
            data-id="${product.id}"
            data-title="${product.title}"
            data-image="${product.image}"
            data-price="${product.price}"
        >Añadir al carrito</button>`;
    });
}

// agregar al carrito
const addToCart = (btn) => {
    let producto = {
        id: btn.dataset.id,
        title: btn.dataset.title,
        price: btn.dataset.price,
        image: btn.dataset.image,
        quantity: 1
    }
    // obtenemos el carrito de localstorage
    let cart = getCart();
    
    if (cart.length) {
        // vericar si el producto ya existe
        let product_exist = productExist(producto, cart)
        if (product_exist) {
            // actualizar la cantidad
            cart.forEach(item => {
                if (item.id == product_exist.id) item.quantity++;
            })
        } else {
            cart.push(producto);
        }
    } else {
        cart.push(producto);
    }
    // actualizamos localstorage
    saveCart(cart)
}