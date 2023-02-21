import React, { useContext } from 'react';
import Product from '../components/product/Product';
import { CartContext } from '../context/CartContext';

function StoreCartPage() {
    const { cartProducts } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito de compras</h1>

            {cartProducts.map((producto, index) =>
                <Product key={index}
                    category={producto.category}
                    description={producto.description}
                    id={producto.id}
                    image={producto.image}
                    price={producto.price}
                    rating={producto.rating}
                    title={producto.title}
                />
            )}
        </div>
    )
}
export default StoreCartPage
