import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

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
                handleSignin={props.handleSignin}
            />

            <About />
        </main>
    )
}

export default Main;