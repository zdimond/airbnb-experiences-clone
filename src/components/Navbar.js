import React from "react";
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <header>
            <img src={airbnbLogo} className="nav-logo"></img>
        </header>
    )
}