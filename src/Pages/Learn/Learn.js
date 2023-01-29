import { useNavigate, useState } from 'react-router-dom';
import Hello from './../../assets/Hello.jpg';
import Help from './../../assets/Help.PNG';
import When from './../../assets/when.gif';
import ILoveYou from './../../assets/ILoveYou.jpg';
import Where from './../../assets/where.gif';
import Name from './../../assets/name.PNG';
import Yes from './../../assets/Yes.PNG';
import No from './../../assets/No.PNG';
import You from './../../assets/You.PNG';
import ThankYou from './../../assets/ThankYou.PNG';


import FlashCard from './flashcard';

import './Learn.css'

const Learn = () => {
    let navigate = useNavigate();


    return (
        <div className="learn">
            <div className="header-container">
                <div className="headerbar">
                    <div className="header-left">
                        Handi
                    </div>
                    <div className="header-right">
                        <button onClick={() => {navigate("/")}}>Home</button>
                        <button onClick={() => {navigate("/learn")}}>Learn</button>
                        <button onClick={() => {navigate("/quiz")}}>Quiz</button>
                    </div>
                </div>
            </div>
            
            <div className="cards">
                <FlashCard img={Hello} answer="Hello"/>
                <FlashCard img={Help} answer="Help"/>
                <FlashCard img={When} answer="When"/>
                <FlashCard img={Where} answer="Where"/>
                <FlashCard img={Yes} answer="Yes"/>
                <FlashCard img={No} answer="No"/>
                <FlashCard img={Name} answer="Name"/>
                <FlashCard img={You} answer="You"/>
                <FlashCard img={ThankYou} answer="Thank you"/>
                <FlashCard img={ILoveYou} answer="I Love you"/>
            </div>


        </div>
    );
}

export default Learn;