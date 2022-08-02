import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";

function NewsCardList(props) {

    // console.log(`NewsCardList: ${props.loggedIn}`);

    const [representArticles, setRepresentArticles] = useState([]);
    const [amountArticles, setAmountArticles] = useState(3);
    
    function handleShowMore() {
        setAmountArticles(amountArticles + 3);
    }

    useEffect(() => {
        if (props.page === "main") {
            console.log('newsaCardList:', props.articles);
            setRepresentArticles(props.articles.slice(0, amountArticles));
        }
        if (props.page === "saved-articles") {
            console.log('newsaCardList:', props.articles);
            setRepresentArticles(props.articles);
        }
    }, [amountArticles, props.articles, props.page]);

    return(

        <section className="news-card-list">
            {
                props.page === "main" ? 
                <h2 className="news-card-list__title">Search results</h2> :
                ""
            }
            <div className="news-card-list__cards">
                <div className="news-card-list__cards-container">

                    {
                        representArticles.map((article, index) => (
                            <NewsCard 
                                key={index}
                                id={index}
                                article={article}
                                page={props.page}
                                loggedIn={props.loggedIn}
                                topRightIcon={props.topRightIcon}
                                textIcon={props.textIcon}
                                image={article.urlToImage || article.image}      
                                keyword={article.keyword}
                                title={article.title}
                                time={article.publishedAt || article.date}
                                text={article.description || article.text}
                                source={article.source.name || article.source}
                                openPopupSignin={props.openPopupSignin}    
                                handleSaveArticle={props.handleSaveArticle}    
                                unsaveArticle={props.unsaveArticle}
                            />
                        ))
                    }

                </div>
                {
                    props.page === "main" ?
                    <button 
                        className="news-card-list__button"
                        onClick={handleShowMore}
                    >
                        Show more
                    </button> :
                    ""
                }
                
            </div>
            

        </section>
    )
}

export default NewsCardList;
