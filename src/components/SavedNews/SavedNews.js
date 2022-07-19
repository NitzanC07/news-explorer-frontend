import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Header from "../Header/Header";
import trashIcon from "../../images/trash.svg";
import trashIconActive from "../../images/trash-active.svg";

function SavedNews(props) {

    return(
        <section className="saved-news">
            <Header  
                handleSignout={props.handleSignout}
                page="saved-articles"
            />

            <SavedNewsHeader />

            <NewsCardList 
                page="saved-articles"
                topRightIcon={[trashIcon, trashIconActive]}
                textIcon="Remove from saved articles"
            />
        </section>
    )
}

export default SavedNews;
