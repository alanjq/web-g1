import React from "react";
import './ProductStyles.scss';

function ProductRating({rate, count}) {
    return (
        <div className="product-rating">
            <span className="stars">Calificación: {rate}</span>
            <span className="total"><small>Calificaciones totales:</small>{count}</span>
        </div>
    )
}
export default ProductRating