// Guarda en Local Storage
export const ToLocalStorage = (value) => localStorage.setItem('cartProducts', JSON.stringify(value))
// Recupera de Local Storage
export const FromLocalStorage = () => JSON.parse(localStorage.getItem('cartProducts')) || []
