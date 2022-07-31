import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import unsaveIcon from '../../images/SavedArticleIcon-NotSaved.svg';
import notLoggedInIcon from '../../images/SavedArticleIcon-notLoggedIn.svg';

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
                    props.articles.length === 0 ? 
                    ""
                    :
                    <NewsCardList 
                        page="main"
                        loggedIn={props.loggedIn}
                        topRightIcon={[unsaveIcon, notLoggedInIcon]}
                        textIcon={props.loggedIn ? "Click to save article" : "Sign in to save articles"}
                        openPopupSignin={props.openPopupSignin}
                        articles={props.articles}
                        createArticle={props.createArticle}
                        handleSaveArticle={props.handleSaveArticle}
                    />   
            }

            <About />
        </main>
    )
}

export default Main;