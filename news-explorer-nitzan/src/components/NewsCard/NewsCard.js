import NewsCardList from "../NewsCardList/NewsCardList";
import image01 from "../../images/cards-images/image_04.png";

function NewsCard(props) {

    return(
        <div className="news-card">
            <h2 className="news-card__title">Search results</h2>
            <div className="news-card__cards">
                <div className="news-card__cards-container">
                    <NewsCardList 
                        image={image01}
                        title="Everyone Needs a Special 'Sit Spot' in Nature"
                        time="November 4, 2020"
                        text="Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..."
                        source="treehugger"                        
                    />
                    <NewsCardList 
                        image={image01}
                        title="title1"
                        time="time1"
                        text="text1"
                        source="source1"
                    />
                    <NewsCardList 
                        image={image01}
                        title="title2"
                        time="time2"
                        text="text2"
                        source="text2"
                    />
                </div>
                <button className="news-card__button">Show more</button>
            </div>
            

        </div>
    )
}

export default NewsCard;
