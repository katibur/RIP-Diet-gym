import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='activity-section-with-title'>
                <Header></Header>
                <Activities></Activities>
            </div>
            <div>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Home;