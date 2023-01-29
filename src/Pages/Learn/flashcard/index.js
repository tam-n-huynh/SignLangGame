import React from 'react';

import './flashcard.css';

const FlashCard = ({img, answer}) => {
    return (
        <div class="flash-card">
                <img className="front" src={img}></img>
                <p className="back">{answer}</p>
        </div>
    )
}

export default FlashCard;