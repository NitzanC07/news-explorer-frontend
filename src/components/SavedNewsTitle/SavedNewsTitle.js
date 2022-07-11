import { useEffect, useState } from "react";

function SavedNewsTitle(props) {

    const [amountOfSavesArticles, setAmountOfSavesArticles] = useState(0);

    useEffect(() => {
        setAmountOfSavesArticles(3)
    }, [amountOfSavesArticles])
    

    return(
        <section className="saved-news-title">
            <p className="saved-news-title__page-name">Saved articles</p>
            <h2 className="saved-news-title__user-details">User, you have {amountOfSavesArticles} saved articles</h2>
            <p className="saved-news-title__keywords">By keywords: ...</p>
        </section>
    )
}

export default SavedNewsTitle;
