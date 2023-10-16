import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
const Header = () =>{
    return(
        <div className="header-div">
            <a className="header-links" href="#home">Home</a>
            <a className="header-links" href="#skills">Skills</a>
            <a className="header-links" href="#examples">Work Examples</a>
            <a className="header-links" href="#contact">Contact</a>
        </div>
    )
}

export default Header;