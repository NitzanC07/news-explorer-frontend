import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import unsaveIcon from '../../images/SavedArticleIcon-NotSaved.svg';
import notLoggedInIcon from '../../images/SavedArticleIcon-notLoggedIn.svg';

function Main(props) {

    // console.log(`Main props: ${props.loggedIn}`);

    return(
        <main className="main">
            <div className='main__background'>
                <Header 
                    page="home"
                    loggedIn={props.loggedIn}
                    handleSignOut={props.handleSignOut}
                    openPopupSignin={props.openPopupSignin}
                />
                <SearchForm />
            </div>

            <NewsCardList 
                page="main"
                topRightIcon={[unsaveIcon, notLoggedInIcon]}
                textIcon="Sign in to save articles"
                openPopupSignin={props.openPopupSignin}
            />

            <About />
        </main>
    )
}

export default Main;