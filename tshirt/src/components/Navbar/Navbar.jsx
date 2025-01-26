import React from 'react';
import './Navbar.scss';

import { Reactcomponent as User } from '../assets/user.svg';

const Navbar = () => {
    return (
        <section className="navbar">
            <div className='nav-container'>
                <div className='nav-logo-container'>Logo here</div>
                <div className='nav-options-container'>
                    <div>Option 1</div>
                    <div>Option 2</div>
                    <div>Option 3</div>
                    <div>Option 4</div>
                </div>
                <div className='nav-user-section'>
                    <User/>
                </div>
            </div>
        </section>
    );
};

export default Navbar;