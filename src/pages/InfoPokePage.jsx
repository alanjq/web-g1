import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Página dinámica que recibe información de acuerdo a los parámetros recibidos
function InfoPokePage() {
    const { state } = useLocation()
    const [data, setData] = useState({})

    // Llamar a la API indicada, cuando se recibe el valor por state
    useEffect(() => {
        if (state.url) {
            fetch(state.url)
                .then(r => r.json())
                .then((response) => {
                    console.log('response', response);
                    setData(response)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [state])

    return (
        <div>
            <h1>{state.name}</h1>
            <p>base_happiness: {data.base_happiness}</p>
        </div>
    )
}

export default InfoPokePage
