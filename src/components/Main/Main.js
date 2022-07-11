import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import unsaveIcon from '../../images/SavedArticleIcon-NotSaved.svg';
import notLoggedInIcon from '../../images/SavedArticleIcon-notLoggedIn.svg';

function Main(props) {

    return(
        <main className="main">
            <div className='main__background'>
                <Header 
                    handleSignin={props.handleSignin}
                />
                <SearchForm />
            </div>

            <NewsCardList 
                page="main"
                topRightIcon={[unsaveIcon, notLoggedInIcon]}
                textIcon="Sign in to save articles"
                handleSignin={props.handleSignin}
            />

            <About />
        </main>
    )
}

export default Main;