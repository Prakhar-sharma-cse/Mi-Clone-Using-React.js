import React from 'react'
import '../styles/Navbar.css';
// import { Link } from 'react-router-dom';
// import logo from '../data/data.json';
import { searchIcon } from '../icons/icons';

const newlogo = "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <a href="/">
                    <img id="logoimage" src={newlogo} alt="Logo" />
                </a>
            </div>

            <a className="navlinks" href="/miphones">Xiaomi Phones</a>
            <a className="navlinks" href="/redmiphones">Redmi Phones</a>
            <a className="navlinks" href="/tv">TV</a>
            <a className="navlinks" href="/laptops">Laptops</a>
            <a className="navlinks" href="/fitness">Fitness</a>
            <a className="navlinks" href="/home">Home</a>
            <a className="navlinks" href="/audio">Audio</a>
            <a className="navlinks" href="/accessories">Accessories</a>

            <div className="searchbox">
                <input type="text" name="search" placeholder="Search Product" />
                {searchIcon}

            </div>
        </div>
    )
}

export default Navbar
