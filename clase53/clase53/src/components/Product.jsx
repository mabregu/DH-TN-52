import { useParams } from "react-router-dom";

let products = [
    {
    "id": 7,
    "name": "Pantalon gris",
    "decription": "Pantalon gris para hombres de talle S",
    "image": "product-1675612219320.jpg",
    "price": "$7",
    "size": "S",
    "category": "man"
    },
    {
    "id": 8,
    "name": "Pantalon gris",
    "decription": "Pantalon gris para mujeres de talle L",
    "image": "product-1675612219321.jpg",
    "price": "$8",
    "size": "L",
    "category": "women"
    },
    {
    "id": 9,
    "name": "Pantalon rosa",
    "decription": "Campera azul para mujeres de talle M",
    "image": "product-1675612219322.jpg",
    "price": "$9",
    "size": "M",
    "category": "women"
    },
    {
    "id": 10,
    "name": "Remera amarilla",
    "decription": "Remera amarilla para hombre de talle S",
    "image": "product-1675613764606.jpg",
    "price": "$10",
    "size": "S",
    "category": "man"
    }
]

const Product = () => {
    const { id } = useParams();
    const product = products.find(p => p.id == id);
    
    if (!product) return <h2>Producto no encontrado!</h2>
    
    return (
        <>
            <h2>Product { product.name }</h2>
        </>
    );
}

export default Product;
