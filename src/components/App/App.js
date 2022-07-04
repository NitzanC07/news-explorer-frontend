import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignup/PopupSignup';
import PopupRegisterSuccessfully from '../PopupRegisterSuccessfully/PopupRegisterSuccessfully';
import { useState } from 'react';

function App() {

  const [isPopupSigninOpen, setPopupSigninOpen] = useState(false);
  const [isPopupSignupOpen, setPopupSignupOpen] = useState(false);
  const [isPopupRegisterSuccessfully, setPopupRegisterSuccessfully] = useState(false);

  function closeAllPopups() {
    setPopupSigninOpen(false);
    setPopupSignupOpen(false);
    setPopupRegisterSuccessfully(false);
  }

  function handleSignin() {
    setPopupSigninOpen(true);
  }

  function handleSignup() {
    setPopupSignupOpen(true);
  }

  function handleRegisterSuccessfully() {
    setPopupRegisterSuccessfully(true);
  }

  return (
    <div className="app">
      <div className="app__page">

        <Main 
          handleSignin={handleSignin}
          handleSignup={handleSignup}
          handleRegisterSuccessfully={handleRegisterSuccessfully}
        />
        <Footer />

        <PopupSignin 
          isOpen={isPopupSigninOpen}
          onClose={closeAllPopups}
          handleDifferentPopup={handleSignup}
        />

        <PopupSignup
          isOpen={isPopupSignupOpen}
          onClose={closeAllPopups}
          handleDifferentPopup={handleSignin}
        />
        
        <PopupRegisterSuccessfully 
          isOpen={isPopupRegisterSuccessfully}
          onClose={closeAllPopups}
          handleSignin={handleSignin}
          title="Registration successfully completed!"
        />

      </div>

      

    </div>
  );
}

export default App;
