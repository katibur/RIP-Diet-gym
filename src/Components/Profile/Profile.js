import React from 'react';
import './Profile.css';
import Photo from '../../images/profile.jpg';

const Profile = () => {
    return (
        <div className='profile-section-calculation'>
            <div className='profile'>
                <div>
                    <img src={Photo} alt="" />
                </div>
                <div className='name-location'>
                    <h5>S M Katibur Rahman</h5>
                    <p className='location'>Satkhira,Khulna,Bangladesh</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Profile;