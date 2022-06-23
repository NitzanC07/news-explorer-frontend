import './App.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';

function App() {
  return (
    <div className="app">
      
      <div className='app__background'>
        <Header />
        <SearchForm />
      </div>
      
    </div>
  );
}

export default App;
