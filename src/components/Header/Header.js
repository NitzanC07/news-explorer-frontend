import NavigationMenu from "../Navigation/Navigation";
import { Link } from 'react-router-dom';

function Header(props) {

    return(
        <header className="header">
            <h1 className='header__title'>NewsExplorer</h1>
            <div className="header__menu">
                <NavigationMenu />
                <button className="header__button" onClick={props.handleSignin}>Sign in</button>
            </div>
            
        </header>
    )
}

export default Header;