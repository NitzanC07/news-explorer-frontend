import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignup/PopupSignup';
import PopupRegisterSuccessfully from '../PopupRegisterSuccessfully/PopupRegisterSuccessfully';
import * as auth from '../../utils/auth';

function App() {

  const [currentUser , setCurrentUser ] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  function handleLoginSubmit(email, password) {
    auth.login(email, password)
    .then((res) => {
        console.log(('response login:', res));
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

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
      auth.getContent(jwt)
      .then((data) => {
          if(data) {
              setLoggedIn(true);
          }
      }, )
      .catch((err) => {
          console.log(`Something went wrong in getContent function: ${err}`);
      })
    }
  }, [isLoggedIn]);

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

  function handleSignout() {
    console.log('user sign out');
  }

  function openPopupSignup() {
    setPopupSignupOpen(true);
  }

  function handleRegisterSuccessfully() {
    setPopupRegisterSuccessfully(true);
  }

  return (
    <div className="app">
      <div className="app__page">

        <Routes>

          <Route 
            path='/saved-news' 
            element={
              <ProtectedRoutes 
                handleSignout={handleSignout}
                loggedIn={isLoggedIn}
              />} 
          />

          <Route exact path='/' element={
            <Main 
              openPopupSignin={openPopupSignin}
              openPopupSignup={openPopupSignup}
              handleRegisterSuccessfully={handleRegisterSuccessfully}
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
  );
}

export default App;
