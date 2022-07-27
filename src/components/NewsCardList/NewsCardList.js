import NewsCard from "../NewsCard/NewsCard";
import { useEffect, useState } from "react";

function NewsCardList(props) {

    const [representArticles, setRepresentArticles] = useState([]);
    const [lastArticle, setLastArticle] = useState(3);
    
    function handleShowMore() {
        setLastArticle(lastArticle + 3);
    }

    useEffect(() => {
        setRepresentArticles(props.articles.slice(0, lastArticle))
    }, [lastArticle, props.articles])

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
                                page={props.page}
                                topRightIcon={props.topRightIcon}
                                textIcon={props.textIcon}
                                image={article.urlToImage}      
                                title={article.title}
                                time={article.publishedAt}
                                text={article.description}
                                source={article.source.name}
                                openPopupSignin={props.openPopupSignin}        
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
