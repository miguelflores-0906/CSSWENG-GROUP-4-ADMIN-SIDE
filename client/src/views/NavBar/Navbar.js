import React from 'react'
import logo from './image 1.png'
import './navBar.css'


const Navbar = () => {
    return (
        <div className="wrapper">
            <img src={logo} alt="Four T's Logo" className="logo"/>
            <h1>
                FOUR T'S GLASS AND ALUMINUM
            </h1>
        </div>
    )
}

export default Navbar
