import React, { useEffect, useState } from 'react';
import Product from '../components/product/Product';
import './StoreStyles.scss'

function StorePage() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Obtenemos la información de la API de productos
        fetch('https://fakestoreapi.com/products')
            .then(r => r.json())
            .then((result) => {
                // console.log(result);
                setProducts(result)
            })
            .catch((err) => {
                console.error('API ERROR', err)
            })
    }, [])

    // Cuando haya artículos
    useEffect(() => {
        if (products.length > 0) {
            setIsLoading(false)
        }
    }, [products])

    return (
        <div>
            <h1>Tienda</h1>
            {isLoading === true ? 'Cargando artículos...' : null}
            <div className='store-container'>
                {products.map(({ category, description, id, image, price, rating, title }) =>
                    <Product key={id}
                        category={category}
                        description={description}
                        id={id}
                        image={image}
                        price={price}
                        rating={rating}
                        title={title}
                    />
                )}
            </div>
        </div>
    )
}
export default StorePage

