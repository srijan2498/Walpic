import React from 'react'
import './Navbar.css'

const Navbar = ({ dark , setDark}) => {
    const toggleDarkLight = () => {
        setDark(!dark)
        const toggle = document.getElementById("toggle");
        toggle.classList.toggle("darkMode");
    }
    return (
        <>
            <nav className={`${dark ? "black" : ""}`}>
                <div className="logo">WALPIC</div>
                <div className={`darkModeToggle ${dark?"grey":""}`}>
                    <div className="light" onClick={toggleDarkLight}>
                        <i className="fa-solid fa-sun"></i>
                    </div>
                    <div className="dark" onClick={toggleDarkLight}>
                        <i className="fa-solid fa-moon"></i>
                    </div>
                    <div className="toggle" id="toggle" ></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
