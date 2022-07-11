import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsTitle from "../SavedNewsTitle/SavedNewsTitle";
import trashIcon from "../../images/trash.svg";
import trashIconActive from "../../images/trash-active.svg";

function SavedNews(props) {

    return(
        <section className="saved-news">
            <SavedNewsHeader  
                handleSignout={props.handleSignout}
            />

            <SavedNewsTitle />

            <NewsCardList 
                page="saved-articles"
                topRightIcon={[trashIcon, trashIconActive]}
                textIcon="Remove from saved articles"
            />
        </section>
    )
}

export default SavedNews;
