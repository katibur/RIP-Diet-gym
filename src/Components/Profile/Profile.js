import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css';
import Photo from '../../images/profile.jpg';

import Banner from '../../images/right-sde.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';



const Profile = (props) => {

    const { lists } = props;

    // exercise time calculation
    let exerciseTime = 0;
    for (const list of lists) {
        exerciseTime = exerciseTime + list.time;
    }

    // toast message
    const showToastMessage = () => {
        toast.success('Good job! Keep Going.', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    // break time button handler and local storage
    const breakBtnHandler = (id) => {
        let breakTime = document.getElementById('break-time');
        breakTime.innerText = id;
        const keyLocalStorage = 'break-time';
        const breaks = getStoredBreaks();
        breaks[keyLocalStorage] = breakTime.innerText;
        localStorage.setItem('breaks', JSON.stringify(breaks))
    }

    const getStoredBreaks = () => {
        const storedBreaks = localStorage.getItem('breaks');
        let breaks = {};
        if (storedBreaks) {
            breaks = JSON.parse(storedBreaks);
        }
        return breaks;
    }



    return (
        <div className='profile-section-calculation'>

            {/* top right side's profile */}
            <div className='profile'>
                <div>
                    <img src={Photo} alt="" />
                </div>
                <div className='name-location'>
                    <h5>S M Katibur Rahman</h5>
                    <p className='location'> <FontAwesomeIcon icon={faLocationCrosshairs}></FontAwesomeIcon> Satkhira,Khulna,Bangladesh.</p>
                </div>
            </div>

            {/* height,weight,age measurements */}
            <div className='body-measurement'>
                <div>
                    <h2>75 <span className='measurement-tag'>kg</span></h2>
                    <h5 className='down-heading'>Weight</h5>
                </div>
                <div>
                    <h2>5'11"</h2>
                    <h5 className='down-heading'>Height</h5>
                </div>
                <div>
                    <h2>25 <span className='measurement-tag'>yrs</span></h2>
                    <h5 className='down-heading'>Age</h5>
                </div>
            </div>

            {/* break-time buttons */}
            <div className='break-btns'>
                <button className='break-btn' onClick={() => { breakBtnHandler(15) }}>15s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(25) }}>25s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(35) }}>35s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(45) }}>45s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(55) }}>55s</button>
            </div>

            {/* exercise time sections */}
            <div className='exercise-div'>
                <h4>Exercise Time: </h4>
                <h4 className='exercise-time'><span className='times'>{exerciseTime}</span> Seconds</h4>
            </div>

            {/* break time section */}
            <div className='break-div'>
                <h4 id='break-time-heading'>Break Time: </h4>
                <h4><span className='break-time times' id='break-time'>0</span> Seconds</h4>
            </div>

            <div>
                <button className='activity-completed-btn' onClick={() => { showToastMessage() }}>Activity Completed</button>
                <ToastContainer />
            </div>

            <img src={Banner} alt="" />
        </div>
    );
};

export default Profile;