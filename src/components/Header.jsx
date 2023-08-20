import React from "react";
import image from "../../public/images/globe.png"

function Header() {
    return (
        <header className="Header">
            <img src={image} alt="image" className="header--image" />
            <h4 className="header--text">my travel journal.</h4>
        </header>
    )
}

export default Header