import React from 'react';
import './Navbar.scss';

import { icons } from '../assets/icons/icons';

const Navbar = () => {
    return (
        <section className="nav-container">
            <div className='nav-logo-container'>Logo here</div>
            <div className='nav-options-container'>
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
                <div>Option 4</div>
            </div>
            <div className='nav-user-section'>
                <icons.Search/>
                <icons.User/>
                <icons.Bag/>
            </div>
        </section>
    );
};

export default Navbar;