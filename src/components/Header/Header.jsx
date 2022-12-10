import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <h1 className="header__title">
                    MustSee
                </h1>
                <Link to="" className='nav_link'>Home Page</Link>
            </header>
        );
    }
}
 
export default Header;