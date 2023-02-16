import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyles.scss';


function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/portfolio">Portafolio</Link>
            <Link to="/projects">Proyectos</Link>
            <Link to="/store">Tienda</Link>
            <span className="cart-dialog">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <Link to="/cart">Carrito</Link>
        </header>
    )
}
export default Header
