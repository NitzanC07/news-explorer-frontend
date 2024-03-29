import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignup/PopupSignup';
import PopupRegisterSuccessfully from '../PopupRegisterSuccessfully/PopupRegisterSuccessfully';
import * as auth from '../../utils/auth';
import * as mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';


function App() {

  // Details about the user and authorization.
  const [currentUser , setCurrentUser ] = useState({});
  const [jwt, setJwt] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  function handleLoginSubmit(email, password) {
    auth.login(email, password)
    .then((res) => {
        if(res) {
            localStorage.setItem("jwt", res);
            setCurrentUser(currentUser);
            setLoggedIn(true);
            closeAllPopups();
        }
    })
    .catch((err) => {
        console.log(`Something went wrong: ${err}`);
    });
  }

  function handleRegisterSubmit({email, password, username}) {
    auth.register(email, password, username)
    .then((res) => {
      closeAllPopups();
      setPopupRegisterSuccessfully(true);
    })
    .catch((err) => {
        console.log(`Something went wrong: ${err}`);
    });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setSavedArticles([]);
  }

  // Automatic logining in for existing user which saved in local storage.
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    setJwt(localStorage.getItem('jwt'));
    if(jwt) {
      auth.getContent(jwt)
      .then((data) => {
          if(data) {
              setLoggedIn(true);
              setCurrentUser({ 
                _id: data._id, 
                name: data.username, 
                email: data.email,
              });
          }
      }, )
      .catch((err) => {
          console.log(`Something went wrong in getContent function: ${err}`);
      })
    }
  }, [isLoggedIn]);

  // Functions for opening and closing popups.
  const [isPopupSigninOpen, setPopupSigninOpen] = useState(false);
  const [isPopupSignupOpen, setPopupSignupOpen] = useState(false);
  const [isPopupRegisterSuccessfully, setPopupRegisterSuccessfully] = useState(false);

  function closeAllPopups() {
    setPopupSigninOpen(false);
    setPopupSignupOpen(false);
    setPopupRegisterSuccessfully(false);
  }

  function openPopupSignin() {
    setPopupSigninOpen(true);
  }

  function openPopupSignup() {
    setPopupSignupOpen(true);
  }

  function handleRegisterSuccessfully() {
    setPopupRegisterSuccessfully(true);
  }

  // Search articles from api by a keyword that the user entered.
  const [keyword, setKeyword] = useState('');

  function handleSearchKeyword(userTopic) {
    setKeyword(userTopic);
  }
  
  useEffect(() => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const weekAgo = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate() - 7).padStart(2, '0')}`;

    if (keyword) {
      setIsLoading(true);
      newsApi.getArticles(keyword, currentDate, weekAgo)
      .then((articlesData) => {
        setArticles(articlesData.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Somthing wrong with setArticles function. ${err.name}: ${err}`);
      })
    }
  }, [keyword]);

  useEffect(() => {
    if(jwt) {
      mainApi.getSavedArticles(jwt)
        .then(res => {
          setSavedArticles(res);
        })
        .catch(err => {
          console.log(`Error in getSavedArticles: ${err}`);
        })
    }
  }, [jwt]);
  
  // Create a new article for general savedArticles.
  function createNewArticle(articleIndex) {
    const articleData = articles[articleIndex];
    mainApi.createNewArticle(jwt, {
        keyword: keyword,
        title: articleData.title,
        text: articleData.description,
        date: articleData.publishedAt,
        source: articleData.source.name,
        link: articleData.url,
        image: articleData.urlToImage,
      })
    .then((res) => {
      setSavedArticles([res, ...savedArticles]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleSaveArticle(articleIndex) {
    const isSaved = savedArticles.some(saveArticle => saveArticle.link === articles[articleIndex].url);
    if(isSaved) {
      const selectArticle = savedArticles.filter(article => article["link"] === articles[articleIndex].url);
      mainApi.savedArticle(jwt, selectArticle[0]._id)
        .then(res => {
          console.log(`The article was saved: ${res}`);
        })
        .catch((err) => {
          console.log(`Error in save article: ${err}`);
        })
    } else {
      createNewArticle(articleIndex);
    }
  };

  function unsaveArticle(articleId) {
    mainApi.unsavedArticle(jwt, articleId)
    .then(res => {
      // console.log(`${res}: Card ${articleId} was deleted.`);
      setSavedArticles((savedArticles) => savedArticles.filter((article) => article._id !== articleId))
    })
    .catch(err => {
      console.log(`Something went wrong with unsaveArticle function: ${err}`);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        <div className="app__page">

          <Routes>

            <Route 
              path='/saved-news' 
              element={
                <ProtectedRoutes 
                  currentUser={currentUser}
                  handleSignOut={handleSignOut}
                  loggedIn={isLoggedIn}
                  articles={savedArticles}
                  savedArticles={savedArticles}
                  unsaveArticle={unsaveArticle}
                />} 
            />

            <Route exact path='/' element={
              <Main 
                currentUser={currentUser}
                loggedIn={isLoggedIn}
                isLoading={isLoading}
                handleSignOut={handleSignOut}
                openPopupSignin={openPopupSignin}
                openPopupSignup={openPopupSignup}
                handleRegisterSuccessfully={handleRegisterSuccessfully}
                keyword={keyword}
                articles={articles}
                savedArticles={savedArticles}
                handleSearchKeyword={handleSearchKeyword}
                handleSaveArticle={handleSaveArticle}
                unsaveArticle={unsaveArticle}
              />} 
            />

          </Routes>

          <Footer />

          <PopupSignin 
            isOpen={isPopupSigninOpen}
            onSubmit={handleLoginSubmit}
            onClose={closeAllPopups}
            handleDifferentPopup={openPopupSignup}
          />

          <PopupSignup
            isOpen={isPopupSignupOpen}
            onSubmit={handleRegisterSubmit}
            onClose={closeAllPopups}
            handleDifferentPopup={openPopupSignin}
          />
          
          <PopupRegisterSuccessfully 
            isOpen={isPopupRegisterSuccessfully}
            onClose={closeAllPopups}
            openPopupSignin={openPopupSignin}
            title="Registration successfully completed!"
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
