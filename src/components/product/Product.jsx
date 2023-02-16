import React from 'react';
import './ProductStyles.scss'
import ProductRating from './ProductRating'

function Product({ category, description, id, image, price, rating, title }) {
    // TODO: reusabilidad de componente
    const handleAddItem = () => {
        let itemToAdd = { category, description, id, image, price, rating, title }
        console.log('Agregar el siguiente objeto al carrito', itemToAdd);
    }

    return (
        <article className='product-item'>
            <h1 className='title'>{title}</h1>
            <span className='category'>{category}</span>
            <span className='id'>{id}</span>
            <img className='image' alt="" src={image} width="100%" />
            <span className='description'>{description}</span>
            <span className='price'>{price}</span>
            <ProductRating rate={rating.rate} count={rating.count} />
            <button type='button' onClick={handleAddItem}>Agregar al carrito</button>
        </article>
    )
}
export default Product
