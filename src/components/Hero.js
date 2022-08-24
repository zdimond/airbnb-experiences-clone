import React from "react";
import heroImg from "../images/hero-img.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={heroImg} className="hero-photo"></img>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home!</p>
        </div>
    )
}