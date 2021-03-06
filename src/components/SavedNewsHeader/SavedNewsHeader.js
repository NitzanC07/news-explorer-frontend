import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

function SavedNewsHeader(props) {

    const currentUser = useContext(CurrentUserContext);
    
    return(
        <section className="saved-news-header">
            <p className="saved-news-header__page-name">Saved articles</p>
            <h2 className="saved-news-header__user-details">{currentUser.name}, you have {props.amountArticles} saved articles</h2>
            <p className="saved-news-header__keywords">By keywords: ...</p>
        </section>
    )

}

export default SavedNewsHeader;
