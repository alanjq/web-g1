import React, { useContext, useEffect, useState } from "react";
import Product from "../components/product/Product";
import { CartContext } from '../context/CartContext';

function StoreCartPage() {
    const context = useContext(CartContext)
    const [productList, setProductList] = useState([])
    // TODO: usar context para renderizar productos del carrito

    return (
        <div>
            <h1>Carrito de compras</h1>
            {productList.map((producto, index) =>
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
