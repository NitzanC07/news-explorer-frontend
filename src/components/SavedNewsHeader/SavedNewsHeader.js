import { useEffect, useState } from "react";

function SavedNewsHeader(props) {

    const [amountOfSavesArticles, setAmountOfSavesArticles] = useState(0);

    useEffect(() => {
        setAmountOfSavesArticles(3)
    }, [amountOfSavesArticles])
    

    return(
        <section className="saved-news-header">
            <p className="saved-news-header__page-name">Saved articles</p>
            <h2 className="saved-news-header__user-details">User, you have {amountOfSavesArticles} saved articles</h2>
            <p className="saved-news-header__keywords">By keywords: ...</p>
        </section>
    )

}

export default SavedNewsHeader;
