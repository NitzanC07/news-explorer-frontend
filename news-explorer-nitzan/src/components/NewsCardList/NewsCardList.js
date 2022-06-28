function NewsCardList(props) {

    return(
        <div className="news-card-list">
            <img className="news-card-list__image" src={props.image} alt="card's pic" />
            <p className="news-card-list__time">{props.time}</p>
            <h2 className="news-card-list__title">{props.title}</h2>
            <p className="news-card-list__text">{props.text}</p>
            <p className="news-card-list__source">{props.source}</p>
        </div>
    )
}

export default NewsCardList;