import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
    
    return(
        <nav className="navigation-menu">
            <ul className="navigation-menu__links">
                <li className="navigation-menu__item navigation-menu__item_active" style={props.name === 'home' ? props.borderStyle : {} }>
                    <Link className="navigation-menu__link" style={props.textStyle} to='/'>Home</Link>
                </li>
                <li className="navigation-menu__item" style={ props.name === 'saved-articles' ? props.borderStyle : {} }>
                    <Link className="navigation-menu__link " style={props.textStyle} to='/saved-news'>Saved articles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;

