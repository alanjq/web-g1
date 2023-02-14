import React from 'react';
import './ProductStyles.scss'

function Product({ category, description, id, image, price, rating, title }) {
    return (
        <article className='product-item'>
            <h1 className='title'>{title}</h1>
            <span className='category'>{category}</span>
            <span className='id'>{id}</span>
            <img className='image' src={image} width="100%" />
            <span className='description'>{description}</span>
            <span className='price'>{price}</span>
            {/* TODO: Create component */}
            {/* Params: rate, count */}
            {/* Eg. <Rating rate={rate} count={count} /> */}
        </article>
    )
}
export default Product
