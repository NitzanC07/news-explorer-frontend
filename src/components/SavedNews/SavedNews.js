import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Header from "../Header/Header";
import trashIcon from "../../images/trash.svg";
import trashIconActive from "../../images/trash-active.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

function SavedNews(props) {

    // console.log(`SavedNews: ${props.loggedIn}`);

    const currentUser = useContext(CurrentUserContext);

    return(
        <section className="saved-news">
            <Header  
                currentUser={currentUser}
                loggedIn={props.loggedIn}
                handleSignOut={props.handleSignOut}
                page="saved-articles"
            />

            <SavedNewsHeader 
                amountArticles={props.articles.length}
                username={currentUser.username}
            />

            <NewsCardList 
                page="saved-articles"
                topRightIcon={[trashIcon, trashIconActive]}
                textIcon="Remove from saved articles"
                articles={props.articles}
            />
        </section>
    )
}

export default SavedNews;
