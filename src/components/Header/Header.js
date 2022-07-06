import NavigationMenu from "../Navigation/Navigation";
import { Link } from 'react-router-dom';

function Header(props) {

    return(
        <header className="header">
            <h1 className='header__title'>
                <Link className='header__title-link' to='/'>
                    NewsExplorer
                </Link>
            </h1>
            <div className="header__menu">
                <NavigationMenu 
                    name='home' 
                    textStyle={{ color: '#fff'}} borderStyle={{ borderBottom: '3px solid #fff' }} 
                />

                <button 
                    className="header__button" 
                    onClick={props.handleSignin}
                >
                    Sign in
                </button>
            </div>
        </header>
    )
}

export default Header;