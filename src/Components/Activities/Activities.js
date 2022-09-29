import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Activity from '../Activity/Activity';
import Questions from '../Questions/Questions'


import Profile from '../Profile/Profile';
import './Activities.css';

const Activities = () => {

    const [activities, setActivities] = useState([]);

    const [lists, setLists] = useState([]);


    // break time handler and local storage
    const getTime = () => {
        let listTime = localStorage.getItem('break-time');
        if (listTime) {
            return JSON.parse(localStorage.getItem('break-time'));
        }
        else {
            return [];
        }
    }

    const [breakTime, setBreakTime] = useState(getTime(0));

    useEffect(() => {
        localStorage.setItem('break-time', JSON.stringify(breakTime))
    }, [breakTime]);

    const breakTimeBtnHandler = (id) => {
        setBreakTime(id);
    }


    // fetching data from json file
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
                    breakTime={breakTime}
                    breakTimeBtnHandler={breakTimeBtnHandler}
                    lists={lists}
                ></Profile>
            </div>
        </div>

    );
};

export default Activities;