import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PokeHome() {
    const [especies, setEspecies] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
            .then(r => r.json())
            .then(({ results }) => {
                setEspecies(results)
            })
            .catch((error) => {
                setEspecies([])
                console.error(error)
            })
    }, [])

    return (
        <div>
            {especies.map((especie, index) => <p key={index}>
                <Link to={`/poke/${especie.name}`} state={{ 
                    url: especie.url ,
                    name: especie.name
                    }}>
                    {especie.name}
                </Link>
            </p>
            )}
        </div>
    )
}
export default PokeHome
