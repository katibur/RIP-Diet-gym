import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Activity from '../Activity/Activity';
import Questions from '../Questions/Questions'


import Profile from '../Profile/Profile';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('Activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAddToList = (props) => {
        const newList = [...lists, props];
        setLists(newList);
    }

    return (

        <div className='home'>
            <div className='activity-section-with-title'>
                <Header></Header>
                <div className='activities-section'>
                    <h3>Select Your Activity For Today:</h3>
                    <div className='activities-container'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToList={handleAddToList}
                            ></Activity>)
                        }
                    </div>
                </div>
                <Questions></Questions>
            </div>

            <div>
                <Profile
                    lists={lists}
                ></Profile>
            </div>
        </div>

    );
};

export default Activities;