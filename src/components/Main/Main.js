import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import unsaveIcon from '../../images/SavedArticleIcon-NotSaved.svg';
import notLoggedInIcon from '../../images/SavedArticleIcon-notLoggedIn.svg';
import notFoundIcon from '../../images/not-found_v1.svg';
import savedIcon from '../../images/SavedArticlesIcon-Saved.svg';
import NoResults from '../NoResults/NoResults';
import Preloader from '../Preloader/Preloader';

function Main(props) {

    // console.log(`Main props: ${props}`);

    return(
        <main className="main">
            <div className='main__background'>
                <Header 
                    page="home"
                    loggedIn={props.loggedIn}
                    handleSignOut={props.handleSignOut}
                    openPopupSignin={props.openPopupSignin}
                />

                <SearchForm
                    handleSearchKeyword={props.handleSearchKeyword}
                />
            </div>

            {
                props.isLoading === true ?
                <Preloader />
                :
                    props.articles.length === 0 ? 
                    props.keyword ? 
                        <NoResults 
                            notFoundIcon={notFoundIcon}
                        /> 
                        : 
                        ""
                    :
                    <NewsCardList 
                        page="main"
                        loggedIn={props.loggedIn}
                        topRightIcon={[unsaveIcon, notLoggedInIcon, savedIcon]}
                        textIcon={props.loggedIn ? "Click to save article" : "Sign in to save articles"}
                        openPopupSignin={props.openPopupSignin}
                        articles={props.articles}
                        savedArticles={props.savedArticles}
                        createArticle={props.createArticle}
                        handleSaveArticle={props.handleSaveArticle}
                        unsaveArticle={props.unsaveArticle}
                    />   
            }

            <About />
        </main>
    )
}

export default Main;