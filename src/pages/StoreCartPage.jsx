import React, { useContext } from 'react';
import Product from '../components/product/Product';
import { CartContext } from '../context/CartContext';
import './StoreCartPageStyles.scss'


function StoreCartPage() {
    const { getProducts } = useContext(CartContext)

    return (
        <div className='store-cart-page'>
            <h1>Carrito de compras</h1>

            {Array.isArray(getProducts()) && getProducts() === 0}

            <div className="product-list">
                {getProducts().map((producto, index) =>
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
        </div>
    )
}
export default StoreCartPage
