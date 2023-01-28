import './Home.css'
import { useNavigate } from 'react-router-dom';

import sign_welcome from '../../assets/sign-welcome.png'

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className="home">

            <div className="welcome-section">
            <img src={ sign_welcome } alt="Welcome spelled in sign language" width="20%" height="auto"/>
                <div className="welcome-heading">
                    <h1>to</h1>
                    <h1>Sign Language Game</h1>
                </div>
                <button className="play-now-button" onClick={() => {navigate("/quiz") }}>Play Now</button>
                <p className="learn-more">Learn More</p>
                <p className="arrow down"></p>
            </div>

            <div className="about-section">
                <section className="about-container">
                    <p className="about-heading">About</p>
                    <div className="line"/>
                </section>
            </div>
        </div>
    );
}

export default Home;