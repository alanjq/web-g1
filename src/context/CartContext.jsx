// Contexto global para manejar los valores del carrito
import React from 'react'

export const CartContext = React.createContext({
    items: [],
    setItems: () => { }
})