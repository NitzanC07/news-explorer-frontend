import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupSignin from '../PopupSignin/PopupSignin';
import PopupSignup from '../PopupSignup/PopupSignup';
import PopupRegisterSuccessfully from '../PopupRegisterSuccessfully/PopupRegisterSuccessfully';

function App() {
  return (
    <div className="app">
      <div className="app__page">
      
        <Main />
        <Footer />

      </div>

      <PopupSignin 
        isOpen={true}
      />

      <PopupSignup
        isOpen={false}
      />
      
      <PopupRegisterSuccessfully 
        isOpen={false}
      />

    </div>
  );
}

export default App;
