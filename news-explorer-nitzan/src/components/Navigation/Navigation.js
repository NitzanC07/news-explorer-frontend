function NavigationMenu(props) {

    return(
        <nav className="navigation-menu">
            <ul className="navigation-menu__links">
                <li className="navigation-menu__link navigation-menu__link_active">Home</li>
                <li className="navigation-menu__link">Saved articles</li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;
