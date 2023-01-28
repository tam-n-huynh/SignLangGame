import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import sign_welcome from '../../assets/sign-welcome.png'

const Home = () => {
    let navigate = useNavigate();
    let ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
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
                <p className="arrow down" onClick={handleClick}></p>
            </div>

            <div ref={ref} className="about-section">
                <section className="about-container">
                    <div className="about-heading">
                        <p>About</p>
                        <div className="line"/>
                    </div>
                    <p>
                        Hello! 
                    </p>
                    <p>   
                        Sign language game is an interactive game 
                        created for the purpose of teaching people sign language.
                    </p>
                    <p>
                        Our game supports two modes: "Learning" and "Quiz"
                    </p>
                    <p>
                        This project bodes the use of a sign language recognition 
                        model trained using the TensorFlow software, as well as an
                        interactive front end created with React.
                    </p>
                    <p>
                        See the source code <a href="https://github.com/tam-n-huynh/SignLangGame" target="_blank" rel="noreferrer">HERE</a>
                    </p>
                </section>
            </div>

            <div className="options-section">

            </div>

        </div>
    );
}

export default Home;