import './About.css'
import { useRef } from 'react';

import a from '../../../assets/about_letters/a.png'
import b from '../../../assets/about_letters/b.png'
import o from '../../../assets/about_letters/o.png'
import u from '../../../assets/about_letters/u.png'
import t from '../../../assets/about_letters/t.png'

const About = () => {
    let ref = useRef(null);
    return (
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
    );
}

export default About