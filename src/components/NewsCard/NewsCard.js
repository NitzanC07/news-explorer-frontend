import React, { useState } from 'react';

function NewsCard(props) {

    const [isShown, setIsShown] = useState(false);
    const [saveIcon, setSaveIcon] = useState(props.topRightIcon[0]);

    function saveIconEnterMoouse() {
        setSaveIcon(props.topRightIcon[1]);
        setIsShown(true);
    }

    function saveIconLeaveMoouse() {
        setSaveIcon(props.topRightIcon[0]);
        setIsShown(false);
    }

    function saveIconClick() {
        props.openPopupSignin();
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
                        {props.textIcon}
                    </span>
                )}
                
            </div>
            {props.page === "saved-articles" ? <div className="news-card__keyword-tag">Keyword</div> : ''}
            <p className="news-card__time">{props.time}</p>
            <h2 className="news-card__title">{props.title}</h2>
            <p className="news-card__text">{props.text}</p>
            <p className="news-card__source">{props.source}</p>
        </div>
    )
}

export default NewsCard;
