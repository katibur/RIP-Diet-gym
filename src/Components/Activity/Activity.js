import React from 'react';
import './Activity.css'

const Activity = (props) => {

    const { handleAddToList } = props;

    const { name, picture, time } = props.activity;


    return (

        <div className='activity-card'>
            <div className='activity-info'>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p><b>For Age: </b> 20-25</p>
                <p><b>Time Required:</b> {time} Sec</p>
            </div>
            <button className='add-to-list-button' onClick={() => { handleAddToList(props.activity) }}>Add To List</button>
        </div>
    );
};

export default Activity;