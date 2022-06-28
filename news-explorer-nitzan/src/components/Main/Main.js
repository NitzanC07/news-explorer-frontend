import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCard from '../NewsCard/NewsCard';

function Main(props) {

    return(
        <main className="main">
            <div className='main__background'>
                <Header />
                <SearchForm />
            </div>

            <NewsCard />

            <About />
        </main>
    )
}

export default Main;