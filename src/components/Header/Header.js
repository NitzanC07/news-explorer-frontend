import NavigationMenu from "../Navigation/Navigation";
import { Link } from 'react-router-dom';
import openMenuMobileIcon from '../../images/menu.svg';
import closeMenuMobileIcon from '../../images/close.svg';
import { useState } from "react";

function Header(props) {

    const [isMenuNavOpen, setMenuNavOpen] = useState(false);
    
    function openMenuNav() {
        console.log('openMenuNav');
        isMenuNavOpen ? 
            setMenuNavOpen(false) 
            :
            setMenuNavOpen(true);
    }

    return(
        <header className={`header ${isMenuNavOpen ? 'header_background' : ''}`}>
            <h1 className='header__title'>
                <Link className='header__title-link' to='/'>
                    NewsExplorer
                </Link>
            </h1>
            <div className={`header__menu ${isMenuNavOpen ? 'header__menu_open' : ''}`}>
                <NavigationMenu 
                    name='home' 
                    textStyle={{ color: '#fff'}} 
                    borderStyle={{ borderBottom: '3px solid #fff' }} 
                />

                <button 
                    className="header__button" 
                    onClick={props.openPopupSignin}
                >
                    Sign in
                </button>
            </div>

            <button 
                className="header__open-mobile-menu"
                onClick={openMenuNav}
            >
                <img className="header__icon" src={isMenuNavOpen ? closeMenuMobileIcon : openMenuMobileIcon} alt="menu icon for mobile version" />
            </button>

        </header>
    )
}

export default Header;