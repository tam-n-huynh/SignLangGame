import './Header.css'
import { useNavigate } from 'react-router-dom';

import sign_welcome from '../../../assets/sign-welcome.png'

const Header = () => {
    let navigate = useNavigate();
    return (
        <div className="welcome-container">
        <img src={ sign_welcome } alt="Welcome spelled in sign language" width="25%" height="auto"/>
            <div className="welcome-heading">
                <h3>to</h3>
                <h2><i>Handi</i></h2>
            </div>
            <button className="play-now-button" onClick={() => {navigate("/quiz") }}>Play Now</button>
            <p className="learn-more">Learn More</p>
            <p className="arrow down" ></p>
        </div>
    );
}

export default Header