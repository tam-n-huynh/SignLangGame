import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import sign_welcome from '../../assets/sign-welcome.png'
import books from '../../assets/books.png'
import trophy from '../../assets/trophy.png'
import hands from '../../assets/hands.png'
import tam_photo from '../../assets/tam_photo.jpg'
import julie_photo from '../../assets/julie_photo.jpg'

const Home = () => {
    let navigate = useNavigate();
    let ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className="home">


            <div className="welcome-container">
            <img src={ sign_welcome } alt="Welcome spelled in sign language" width="25%" height="auto"/>
                <div className="welcome-heading">
                    <h2>to</h2>
                    <h2>Sign Language Game</h2>
                </div>
                <button className="play-now-button" onClick={() => {navigate("/quiz") }}>Play Now</button>
                <p className="learn-more">Learn More</p>
                <p className="arrow down" onClick={handleClick}></p>
            </div>


            <div className="game-info-container">
                <section className="learn-section">
                    <img src={ books } alt="Clipart of textbooks" height="50px"/>
                    <p>Learn</p>
                </section>

                <section className="quiz-section">
                <img src={ trophy } alt="Clipart of trophy" height="50px"/>
                    <p>Quiz</p>
                </section>

                <section className="other-section">
                    <img src={ hands } alt="Clipart of hands" height="50px"/>
                    <p>Other</p>
                </section>
            </div>


            <div ref={ref} className="about-container">
                <section className="about-section">
                    <div className="about-heading">
                        <p className="about-text">About</p>
                        <div className="line"/>
                    </div>
                    <p>
                        Hello! 
                    </p>
                    <p>   
                        "Sign language game" is an interactive game 
                        created for the purpose of teaching people American Sign Language.
                    </p>
                    <p>
                        Our game supports two modes: "Learning" and "Quiz". The former
                        allows users to practice and develop their sign language skills
                        while the latter puts those skills to the test.
                    </p>
                    <p>
                        This project employs the use of a sign language recognition 
                        model trained using the TensorFlow software, as well as an
                        interactive front end created with React.
                    </p>
                    <p>
                        See the source code <a href="https://github.com/tam-n-huynh/SignLangGame" target="_blank" rel="noreferrer">HERE</a>
                    </p>
                </section>
            </div>


            <div className="dev-info-container">
                <section className="dev-photos">
                    <img src={ tam_photo } alt="Tam Huynh" width="46%" height="auto" className="dev-img" />
                    <img src={ julie_photo } alt="Julie Maricic-Detweiler" width="35%" height="auto" className="dev-img"/>
                </section>
                <section className="meet-devs-section">
                    <div className="meet-devs-heading">
                        <p >Meet the Devs!</p>
                        <div className="line"/>
                    </div>
                    <div className="biographies">
                        <p className="dev-name"> <i>Tam Huynh</i></p>
                        <p className="dev-description">Tam is awesome.</p>
                        <p className="dev-name"> <i>Julie Maricic-Detweiler</i> </p>
                        <p className="dev-description">Julie is awesome.</p>
                    </div>
                </section>
            </div>


        </div>
    );
}

export default Home;