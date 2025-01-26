import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import { images } from '../assets/images/images';

const Home = () => {
    return (
        <div>
            <img className="home-banner" src={images.Banner} />
            <Navbar/>
        </div>
    );
};

export default Home;