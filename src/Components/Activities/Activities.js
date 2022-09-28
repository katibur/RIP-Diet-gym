import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';



const Activities = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('Activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);


    return (
        <div>
            {
                activities.map(activity => <Activity
                    key={activity.id}
                    activity={activity}
                ></Activity>)
            }
        </div>
    );
};

export default Activities;