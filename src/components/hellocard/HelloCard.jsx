import React from 'react';
import './HelloCardStyles.scss'

function HelloCard({ nombre }) {
    return (
        <section className='hellocard'>
            <div className="izquierdo">
                Me llamo {nombre}
            </div>
            <div className='derecho'>
                <p>y soy desarrollador web</p>
            </div>
        </section>
    )
}
export default HelloCard
