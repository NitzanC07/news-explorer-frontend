import NavigationMenu from "../Navigation/Navigation";
import signOutIcon from "../../images/logout.svg";
import { Link } from 'react-router-dom';

function SavedNewsHeader(props) {

    return(
        <header className="saved-news-header">
            <h1 className='saved-news-header__title'>
                <Link className='saved-news-header__title-link' to='/'>
                    NewsExplorer
                </Link>
            </h1>
            <div className="saved-news-header__menu">
                <NavigationMenu name='saved-articles' textStyle={{ color: '#1A1B22'}} borderStyle={{ borderBottom: '3px solid #1A1B22' }} />
                <button className="saved-news-header__button" onClick={props.handleSignout}>Username
                    <img className="saved-news-header__icon" src={signOutIcon} alt="Log out icon" />
                </button>
            </div>
        </header>
    )
}

export default SavedNewsHeader;
