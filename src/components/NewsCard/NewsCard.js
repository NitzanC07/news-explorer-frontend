import React, { useState } from 'react';
import unsaveIcon from '../../images/SavedArticleIcon-NotSaved.svg';
import notLoggedInIcon from '../../images/SavedArticleIcon-notLoggedIn.svg';

function NewsCard(props) {

    const [isShown, setIsShown] = useState(false);
    const [saveIcon, setSaveIcon] = useState(unsaveIcon);

    function saveIconEnterMoouse() {
        setSaveIcon(notLoggedInIcon);
        setIsShown(true);
    }

    function saveIconLeaveMoouse() {
        setSaveIcon(unsaveIcon);
        setIsShown(false);
    }

    function saveIconClick() {
        props.handleSignin();
    }


    return(
        <div className="news-card">
            <img className="news-card__image" src={props.image} alt="card's pic" />
            <div className="news-card__save-button">
                <button 
                    className="news-card__save-button-icon"
                    type="button"
                    onMouseEnter={saveIconEnterMoouse}
                    onMouseLeave={saveIconLeaveMoouse}
                    onClick={saveIconClick}
                >
                    <img src={saveIcon} alt="Save icon" />
                </button>
                {isShown && (
                    <span className="news-card__save-button-signin">
                        Sign in to save articles
                    </span>
                )}
            </div>
            
            <p className="news-card__time">{props.time}</p>
            <h2 className="news-card__title">{props.title}</h2>
            <p className="news-card__text">{props.text}</p>
            <p className="news-card__source">{props.source}</p>
        </div>
    )
}

export default NewsCard;
