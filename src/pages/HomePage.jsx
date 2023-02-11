import React from 'react';
import HelloCard from '../components/hellocard/HelloCard';

function HomePage() {
    return (
        <div>
            <h1>Bienvenido a mi sitio personal</h1>

            <HelloCard nombre="Alan" />
        </div>
    )
}
export default HomePage
