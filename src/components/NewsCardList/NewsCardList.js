import NewsCard from "../NewsCard/NewsCard";
import image01 from "../../images/cards-images/image_08.png";
import image02 from "../../images/cards-images/image_04.png";
import image03 from "../../images/cards-images/image_07.png";

function NewsCardList(props) {

    return(

        <div className="news-card-list">
            <h2 className="news-card-list__title">Search results</h2>
            <div className="news-card-list__cards">
                <div className="news-card-list__cards-container">
                    <NewsCard
                        image={image01}
                        title="Everyone Needs a Special 'Sit Spot' in Nature"
                        time="November 4, 2020"
                        text="Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..."
                        source="treehugger"
                        handleSignin={props.handleSignin}
                    />
                    <NewsCard
                        image={image02}
                        title="Nature makes you better"
                        time="February 19, 2019"
                        text="We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves."
                        source="national geographic"
                        handleSignin={props.handleSignin}
                    />
                    <NewsCard
                        image={image03}
                        title="Grand Teton Renews Historic Crest Trail"
                        time="October 19, 2020"
                        text="“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be..."
                        source="national geographic"
                        handleSignin={props.handleSignin}
                    />
                </div>
                <button className="news-card-list__button">Show more</button>
            </div>
            

        </div>
    )
}

export default NewsCardList;
