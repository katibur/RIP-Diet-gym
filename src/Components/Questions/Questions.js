import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='questions-and-answers'>
                <div className='questions-and-answers-div'>
                    <h3 className='questions'>How does react work?</h3>
                    <p>React is without a doubt one of the most powerful and flexible frontend frameworks. But with its great power comes great responsibility - it's easy to misuse it and create a mess of an app. To avoid it, one needs to really understand how React works internally by studying its code implementation and structure. Coincidentally, it is also one of the best ways to learn React in general.</p>
                </div>

                <div className='questions-and-answers-div'>
                    <h3 className='questions'>What are the differences between props ans states?</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>

                <div className='questions-and-answers-div'>
                    <h3 className='questions'>What are the other purposes of useEffect without loading API data?</h3>
                    <p>1. Running on state change: validating input field</p>
                    <p>2. Running on state change: live filtering</p>
                    <p>3. Running on state change: trigger animation on new array value</p>
                    <p>4. Running on props change: update paragraph list on fetched API data update</p>
                    <p>5. Running on props change: updating fetched API data to get BTC updated price</p>
                </div>

            </div>
        </div>
    );
};

export default Questions;