import React from "react";
import Cart from "./Cart";


const Navbar = () => {
    return (
        <div className="navbarcss">
            <div className="menu-header">
                <ul>
                    <li href="#">Inicio</li>
                    <li href="#">Productos</li>
                    <li href="#">Sucursales</li>
                    <li href="#">Contacto</li>
                </ul>
                <Cart/>
            </div>
        </div>
    )
}

export default Navbar;