import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavigationMenu from "../Navigation/Navigation";
import openMenuMobileIconWhite from '../../images/menu.svg';
import openMenuMobileIconBlack from '../../images/menu-black.svg';
import closeMenuMobileIcon from '../../images/close.svg';
import signOutIconBlack from "../../images/logoutBlack.svg";
import signOutIconWhite from "../../images/logoutWhite.svg";

function Header(props) {

    const [isMenuNavOpen, setMenuNavOpen] = useState(false);
    function openMenuNav() {
        console.log('openMenuNav');
        isMenuNavOpen ? 
            setMenuNavOpen(false) 
            :
            setMenuNavOpen(true);
    }

    
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
      }, []);
    
      useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
    const isMobile = windowDimension <= 760;

    return(
        <header 
            className={ `header ${isMenuNavOpen ? 'header_background' : ''}` }
            style={props.page === "home" ? 
                {borderBottom: '1px solid rgba(255, 255, 255, 0.2)'} :
                {borderBottom: '1px solid rgba(0, 0, 0, 0.2)'} 
            }    
        >
            <h1 className='header__title'>
                <Link 
                    className='header__title-link' 
                    style={ props.page === "home" || isMenuNavOpen === true ? 
                        {color: '#fff'} : 
                        {color: '#000'} } 
                    to='/'>
                    NewsExplorer
                </Link>
            </h1> 
            
            <div className={`header__menu ${isMenuNavOpen ? 'header__menu_open' : ''}`}>
                <NavigationMenu 
                    page={ props.page || isMenuNavOpen === true } 
                    isMobile = {isMobile}
                    textStyle={ props.page === "home" || isMenuNavOpen === true ? 
                        { color: '#fff'} : 
                        { color: '#1A1B22'}} 
                    borderStyle={ props.page === "home" || isMenuNavOpen === true ? 
                        { borderBottom: '3px solid #fff' } : 
                        { borderBottom: '3px solid #1A1B22' }} 
                />
                

                    <button 
                        className="header__button" 
                        onClick={ props.openPopupSignin }
                        style={ props.page === "home"  || isMenuNavOpen === true ? 
                            {color: '#fff', border: '1px solid #fff', padding: '0' } : 
                            {color: '#1A1B22', border: '1px solid #1A1B22', padding: '0 0 0 19px'} }
                        
                    >
                        { props.page === "home" ? "Sign in" : "Username" }
                        { props.page !== "home" ? 
                            <img 
                                className="saved-news-header__icon" 
                                src={ isMenuNavOpen ? signOutIconWhite : signOutIconBlack } alt="Log out icon" 
                            />
                            :
                            ""
                        }
                    </button>
                
            </div>

            <button 
                className="header__open-mobile-menu"
                onClick={openMenuNav}
            >
                <img 
                    className="header__icon" 
                    src={ isMenuNavOpen ? 
                        closeMenuMobileIcon : 
                        props.page === "home" ? 
                            openMenuMobileIconWhite :
                            openMenuMobileIconBlack 
                        }   
                    alt="menu icon for mobile version" />
            </button>

        </header>
    )
}

export default Header;