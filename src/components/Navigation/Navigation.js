import { Link } from 'react-router-dom';

function NavigationMenu(props) {

    return(
        <nav className="navigation-menu">
            <ul className="navigation-menu__links">
                <li className="navigation-menu__item navigation-menu__item_active" style={props.page === 'home' && !props.isMobile ? props.borderStyle : {} }>
                    <Link className="navigation-menu__link" style={props.textStyle} to='/'>Home</Link>
                </li>
                {
                    props.loggedIn ?
                    <li className="navigation-menu__item" style={ props.page === 'saved-articles' && !props.isMobile ? props.borderStyle : {} }>
                        <Link className="navigation-menu__link " style={props.textStyle} to='/saved-news'>Saved articles</Link>
                    </li> 
                    :
                    ""
                }
                
            </ul>
        </nav>
    )
}

export default NavigationMenu;

