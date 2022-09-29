import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css';
import Photo from '../../images/profile.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';



const Profile = (props) => {

    const { lists } = props;
    let exerciseTime = 0;
    for (const list of lists) {
        exerciseTime = exerciseTime + list.time;
    }



    const showToastMessage = () => {
        toast.success('Good job! Keep Going.', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

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

            <div className='profile'>
                <div>
                    <img src={Photo} alt="" />
                </div>
                <div className='name-location'>
                    <h5>S M Katibur Rahman</h5>
                    <p className='location'> <FontAwesomeIcon icon={faLocationCrosshairs}></FontAwesomeIcon> Satkhira,Khulna,Bangladesh.</p>
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
                <button className='break-btn' onClick={() => { breakBtnHandler(10) }}>10s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(20) }}>20s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(30) }}>30s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(40) }}>40s</button>
                <button className='break-btn' onClick={() => { breakBtnHandler(50) }}>50s</button>
            </div>

            <div className='exercise-div'>
                <h4>Exercise Time: </h4>
                <h4 className='exercise-time'>{exerciseTime} Seconds</h4>
            </div>

            <div className='break-div'>
                <h4 id='break-time-heading'>Break Time: </h4>
                <h4><span className='break-time' id='break-time'>00</span> Seconds</h4>
            </div>

            <div>
                <button className='activity-completed-btn' onClick={() => { showToastMessage() }}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Profile;