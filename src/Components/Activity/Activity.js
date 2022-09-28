import React from 'react';

const Activity = (props) => {

    const { name, picture, time } = props.activity;

    return (

        <div>
            <h1>name: {name}</h1>
            <img src={picture} alt="" />
            <p>time: {time}</p>
        </div>
    );
};

export default Activity;