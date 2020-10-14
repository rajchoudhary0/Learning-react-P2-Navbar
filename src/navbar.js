import React from 'react';
import './App.css';

function Navbar(){
    return(
        <div className="nav">
            <div className="logo">
                <h3>The Logo</h3>
            </div>
            <ul >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;