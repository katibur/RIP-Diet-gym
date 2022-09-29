import React from 'react';
import './Activity.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Activity = (props) => {

    const { handleAddToList } = props;

    const { name, picture, age, time } = props.activity;

    return (

        <div className='activity-card'>
            <div className='activity-info'>
                <img src={picture} alt="" />
                <h3>{name}</h3>
                <p><b>For Age: </b> {age}</p>
                <p><b>Time Required:</b> {time} Sec</p>
            </div>
            <button className='add-to-list-button' onClick={() => { handleAddToList(props.activity) }}>Add To List <FontAwesomeIcon icon={faList}></FontAwesomeIcon></button>
        </div>
    );
};

export default Activity;