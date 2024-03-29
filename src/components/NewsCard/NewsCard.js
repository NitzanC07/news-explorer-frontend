import React, { useEffect, useState } from 'react';

function NewsCard(props) {

    // console.log(`NewsCard: ${props}`);

    const [isShown, setIsShown] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [saveIcon, setSaveIcon] = useState(props.topRightIcon[0]);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    useEffect(() => {
        if(props.page === "main") {
            setIsSaved(props.savedArticles.some(savedArticle => savedArticle.link === props.article.url));
            isSaved ? setSaveIcon(props.topRightIcon[2]) : setSaveIcon(props.topRightIcon[0]);
        } else {
            setIsSaved(true);
        }
    }, [isSaved, props.article.url, props.savedArticles, props.topRightIcon, props.page])


    function saveIconEnterMoouse() {
        if(!isSaved) {
            setSaveIcon(props.topRightIcon[1]);
            setIsShown(true);
        }
    }

    function saveIconLeaveMoouse() {
        if(!isSaved) {
            setSaveIcon(props.topRightIcon[0]);
            setIsShown(false);
        }
    }

    function saveIconClick() {
        if (props.loggedIn) {
            props.handleSaveArticle(props.id, props.article);
            setSaveIcon(props.topRightIcon[2]);
            setIsShown(false);
        } else {
            props.openPopupSignin();
        }
    }

    function unsaveArticle() {
        if(props.page === "main") {
            const selectArticle = props.savedArticles.filter(savedArticle => savedArticle.link === props.article.url);
            props.unsaveArticle(selectArticle[0]._id);
        }
        if(props.page === "saved-articles") {
            props.unsaveArticle(props.article._id);
        }
        
    }

    return(
        <div className="news-card">
            <a 
                className='news-card__link'
                href={props.article.link || props.article.url} 
                target='_blank' 
                rel="noreferrer">
            <img className="news-card__image" src={props.image} alt="card's pic" />
            </a>
            
            {props.page === "saved-articles" ? <div className="news-card__keyword-tag">{props.keyword}</div> : ''}
            <p className="news-card__time">{`${months[props.time.slice(5, 7)-1]} ${props.time.slice(8, 10)}, ${props.time.slice(0, 4)}`}</p>
            <h2 className="news-card__title">{props.title}</h2>
            <p className="news-card__text">{props.text}</p>
            <p className="news-card__source">{props.source}</p>
            
            <div className="news-card__save-button">
                
                <button 
                    className="news-card__save-button-icon"
                    type="button"
                    onMouseEnter={saveIconEnterMoouse}
                    onMouseLeave={saveIconLeaveMoouse}
                    onClick={isSaved ? unsaveArticle : saveIconClick }
                >
                    <img src={saveIcon} alt="Save icon" />
                </button>
                {isShown && (
                    <span className="news-card__save-button-signin">
                        {props.textIcon}
                    </span>
                )}
                
            </div>
        </div>
    )
}

export default NewsCard;
