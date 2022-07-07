import NavigationMenu from "../Navigation/Navigation";
import signOutIcon from "../../images/logout.svg";
import { Link } from 'react-router-dom';
import openMenuMobileIcon from '../../images/menu-black.svg';
import closeMenuMobileIcon from '../../images/close-black.svg';
import { useState } from "react";

function SavedNewsHeader(props) {

    const [isMenuNavOpen, setMenuNavOpen] = useState(false);
    
    function openMenuNav() {
        console.log('openMenuNav');
        isMenuNavOpen ? 
            setMenuNavOpen(false) 
            :
            setMenuNavOpen(true);
    }

    return(
        <header className={`saved-news-header ${isMenuNavOpen ? 'saved-news-header_background' : ''}`}>
            <h1 className='saved-news-header__title'>
                <Link className='saved-news-header__title-link' to='/'>
                    NewsExplorer
                </Link>
            </h1>
            <div className={`saved-news-header__menu ${isMenuNavOpen ? 'saved-news-header__menu_open' : ''}`}>
                <NavigationMenu 
                    name='saved-articles' 
                    textStyle={{ color: '#1A1B22'}} 
                    borderStyle={{ borderBottom: '3px solid #1A1B22' }} 
                />
                <button 
                    className="saved-news-header__button" 
                    onClick={props.handleSignout}
                >
                    Username
                    <img 
                        className="saved-news-header__icon" 
                        src={signOutIcon} alt="Log out icon" 
                    />
                </button>
            </div>

            <button 
                className="saved-news-header__open-mobile-menu"
                onClick={openMenuNav}
            >
                <img className="saved-news-header__menu-icon" src={isMenuNavOpen ? closeMenuMobileIcon : openMenuMobileIcon} alt="menu icon for mobile version" />
            </button>
        </header>
    )
}

export default SavedNewsHeader;
