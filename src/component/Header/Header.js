import React from 'react';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/reveiw">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <div className="searchBar">
                <input placeholder='Type here to search' type="search" name="" id="" />
                <input type="submit" value="Search" />
            </div>
        </div>
    );
};

export default Header;