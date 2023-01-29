
import { useNavigate } from 'react-router-dom';

import books from '../../../assets/books.png'
import trophy from '../../../assets/trophy.png'
import hands from '../../../assets/hands.png'

const Info = () => {
    let navigate = useNavigate();
    return (
        <div className="game-info-container">
            <section className="learn-section">
                <img class="gimg" src={ books } alt="Clipart of textbooks" width="50px" height="50px"/>
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
            <img class="gimg" src={ trophy } alt="Clipart of trophy" width="50px" height="50px"/>
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
                <img class="gimg" src={ hands } alt="Clipart of hands" width="50px" height="50px"/>
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
    );
}

export default Info