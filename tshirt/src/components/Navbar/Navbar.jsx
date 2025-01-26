import React from 'react';
import './Navbar.scss';

import { icons } from '../assets/icons/icons';

const Navbar = () => {
    return (
        <section className="nav-container">
            <div className='nav-logo-container'>Logo here</div>
            <ul className='nav-menu'>
                <li className='nav-menu-item'> Option 1 <icons.Expand/>
                </li> 
                <li className='nav-menu-item'> Option 2 <icons.Expand/>
                </li>
                <li className='nav-menu-item'> Option 3 <icons.Expand/>
                </li>
            </ul>
            <div className='nav-user-section'>
                <icons.Bag/>
                <icons.User/>
                <icons.Search/>
                </div>
        </section>
    );
};

export default Navbar;