import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'



const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('Activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);


    return (

        <div className='activities-section'>
            <h3>Select Your Activity</h3>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>

    );
};

export default Activities;