import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

function SavedNewsHeader(props) {

    const currentUser = useContext(CurrentUserContext);

    function findKeywords() {
        const keywords = {};
        props.articles.forEach(article => {
            if(keywords[article.keyword] >= 1) {
                keywords[article.keyword] += 1
            } else {
                keywords[article.keyword] = 1
            }
        });
        let mostKeywords = ''
        const values = Object.values(keywords)
        const keys = Object.keys(keywords)
        for(let c = 0; c < 2; c++) {
            let i = values.indexOf(Math.max(...values))
            const mostKey = keys[i]
            if(!mostKey) {
                return mostKeywords;
            }
            mostKeywords += mostKey + ", "
            keys.splice(i, 1);
            values.splice(i, 1);
        }
        if (keys.length > 0) {
            mostKeywords += `and ${keys.length} other.`
        } else {
            mostKeywords = mostKeywords.slice(0, -2) + "."
        }
        return mostKeywords
    }

    const mostKeywords = findKeywords();

    return(
        <section className="saved-news-header">
            <p className="saved-news-header__page-name">Saved articles</p>
            <h2 className="saved-news-header__user-details">{currentUser.name}, you have {props.amountArticles} saved articles</h2>
            <p className="saved-news-header__keywords">By keywords: <b>{mostKeywords}</b></p>
        </section>
    )

}

export default SavedNewsHeader;
