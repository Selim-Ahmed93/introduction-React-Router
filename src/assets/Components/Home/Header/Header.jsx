// import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav> 

                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
               
            </nav>
        </div>
    );
};

export default Header;