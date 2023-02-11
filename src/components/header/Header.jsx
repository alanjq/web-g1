import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyles.scss'


function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/portfolio">Portafolio</Link>
            <Link to="/projects">Proyectos</Link>
        </header>
    )
}
export default Header
