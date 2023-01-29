import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import sign_welcome from '../../assets/sign-welcome.png'

import books from '../../assets/books.png'
import trophy from '../../assets/trophy.png'
import hands from '../../assets/hands.png'

import a from '../../assets/about_letters/a.png'
import b from '../../assets/about_letters/b.png'
import o from '../../assets/about_letters/o.png'
import u from '../../assets/about_letters/u.png'
import t from '../../assets/about_letters/t.png'

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
                    <h3>to</h3>
                    <h2><i>Handi</i></h2>
                </div>
                <button className="play-now-button" onClick={() => {navigate("/quiz") }}>Play Now</button>
                <p className="learn-more">Learn More</p>
                <p className="arrow down" onClick={handleClick}></p>
            </div>


            <div className="game-info-container">
                <section className="learn-section">
                    <img src={ books } alt="Clipart of textbooks" width="50px" height="50px"/>
                    <button onClick={ () => {navigate("/learn") }}>Learn Mode</button>
                    <p>
                        <b>Learn Mode</b> offers users the chance to practice
                        their sign language skills in a pressure-free 
                        environment. You will be shown an image of a
                        sign, and will then have to determine which option
                        is the correct written translation.
                    </p>
                </section>

                <section className="quiz-section">
                <img src={ trophy } alt="Clipart of trophy" width="50px" height="50px"/>
                <button onClick={ () => {navigate("/quiz") }}>Quiz Mode</button>
                    <p>
                        <b>Quiz Mode</b> allows users to test skills gained
                        using Learn Mode. You will be given a word or letter
                        and will then have to translate it to ASL within the
                        provided time limit. Our machine learning model will
                        determine whether you've signed the correct word. Get
                        to 10 points to win!
                    </p>
                </section>

                <section className="other-section">
                    <img src={ hands } alt="Clipart of hands" width="50px" height="50px"/>
                    <button onClick={ () => {window.open("https://www.nad.org/resources/american-sign-language/what-is-american-sign-language/", "_blank") }}>Why ASL?</button>
                    <p>
                        Did you know nearly 500,000 users of ASL between the
                        United States and Canada? Learning ASL can open many
                        doors for communication as well as improve inclusivity 
                        for those with deafness and hearing loss. Click the link 
                        above to learn more.
                    </p>
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
                        <b><i>Handi</i></b> is an interactive game 
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
                        See the source code <a href="https://github.com/tam-n-huynh/SignLangGame" target="_blank" rel="noreferrer">HERE!</a>
                    </p>
                </section>
                <section className="about-sign">
                    <div className="letter-wrapper">
                        <img src={a} height="70px" width="70px" alt="'a' in sign language" className="about-sign-img"/>
                        <p>a</p>
                    </div>
                    <div className="letter-wrapper">
                        <p className="p-1">b</p>
                        <img src={b} height="70px" width="50px" alt="'b' in sign language" className="about-sign-img-1" />
                    </div>
                    <div className="letter-wrapper">
                        <img src={o} height="80px" width="60px" alt="'o' in sign language" className="about-sign-img" />
                        <p>o</p>
                    </div>
                    <div className="letter-wrapper">
                        <p className="p-1">u</p>
                        <img src={u} height="80px" width="60px" alt="'u' in sign language" className="about-sign-img-1"/>
                    </div>
                    <div className="letter-wrapper">
                        <img src={t} height="70px" width="70px" alt="'t' in sign language" className="about-sign-img"/>
                        <p>t</p>
                    </div>
                </section>
            </div>


            <div className="dev-info-container">
                <section className="dev-photos">
                    <img src={ tam_photo } alt="Tam Huynh" width="48%" height="auto" className="dev-img" />
                    <img src={ julie_photo } alt="Julie Maricic-Detweiler" width="35%" height="auto" className="dev-img"/>
                </section>
                <section className="meet-devs-section">
                    <div className="meet-devs-heading">
                        <p >Meet the Devs!</p>
                        <div className="line"/>
                    </div>
                    <div className="biographies">
                        <p className="dev-name"> <i>Tam Huynh</i></p>
                        <p className="dev-description">
                            Tam is a 3rd year Computer Science major at the University of Florida.
                            He is interested in exploring the field of machine learning and 
                            artificial intelligence.
                        </p>
                        <p className="dev-name"> <i>Julie Maričić-Detweiler</i> </p>
                        <p className="dev-description">
                            Julie is a 3rd year Computer Science major at the University of Florida.
                            She enjoys designing and creating web applications. She also hopes to
                            learn more about machine learning in the future.
                        </p>
                    </div>
                </section>
            </div>


        </div>
    );
}

export default Home;