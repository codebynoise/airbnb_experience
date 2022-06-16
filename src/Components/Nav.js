import React from 'react'
import logo from './airbnb-logo.png'
import "./Nav.css"

function Nav(){
    return (
        <nav>
            <img className="logo" src={logo} alt="logo" />
            
        </nav>
    )
}

export default Nav;