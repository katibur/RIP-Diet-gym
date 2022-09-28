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

            <div className='body-measurement'>
                <div>
                    <h2>75 <span className='measurement-tag'>kg</span></h2>
                    <h5 className='down-heading'>Weight</h5>
                </div>
                <div>
                    <h2>5.11</h2>
                    <h5 className='down-heading'>Height</h5>
                </div>
                <div>
                    <h2>25 <span className='measurement-tag'>yrs</span></h2>
                    <h5 className='down-heading'>Age</h5>
                </div>
            </div>

            <div className='break-btns'>
                <button className='break-btn'>10s</button>
                <button className='break-btn'>20s</button>
                <button className='break-btn'>30s</button>
                <button className='break-btn'>40s</button>
                <button className='break-btn'>50s</button>
            </div>

            <div className='exercise-div'>
                <h4>Exercise Time: </h4>
                <h4 className='exercise-time'>00</h4>
            </div>

            <div className='break-div'>
                <h4>Break Time: </h4>
                <h4 className='break-time'>00</h4>
            </div>

            <div>
                <button className='activity-completed-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Profile;