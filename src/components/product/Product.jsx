import React, { useContext } from 'react';
import './ProductStyles.scss'
import ProductRating from './ProductRating'
import { CartContext } from '../../context/CartContext';


function Product({ category, description, id, image, price, rating, title }) {
    const context = useContext(CartContext)

    const handleAddItem = () => {
        context.addProduct({ category, description, id, image, price, rating, title })
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
            <button type='button' onClick={()=>context.deleteProduct(id)}>Eliminar del carrito</button>
        </article>
    )
}
export default Product
