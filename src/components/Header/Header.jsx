import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className='nav container'>
                <a href="/"><img src={logo} alt="" /></a>
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;