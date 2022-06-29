function NewsCard(props) {

    return(
        <div className="news-card">
            <img className="news-card__image" src={props.image} alt="card's pic" />
            <p className="news-card__time">{props.time}</p>
            <h2 className="news-card__title">{props.title}</h2>
            <p className="news-card__text">{props.text}</p>
            <p className="news-card__source">{props.source}</p>
        </div>
    )
}

export default NewsCard;
