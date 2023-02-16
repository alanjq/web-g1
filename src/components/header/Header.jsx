import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyles.scss'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/portfolio">Portafolio</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/store">Tienda</Link>
            {/* Font Awesome */}
            <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
            <Link to="/cart">Carrito</Link>
            {/* HeroIcon */}
            {/* <span><ShoppingCartIcon style={{ height: '1.5em' }} /></span> */}
        </header>
    )
}
export default Header
