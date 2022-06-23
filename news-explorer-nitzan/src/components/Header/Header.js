function Header(props) {

    function handleLogOut() {

    }

    return(
        <header className="header">
            <h1 className='header__title'>NewsExplorer</h1>
            <ul className="header__links">
                <li className="header__link">Home</li>
                <li className="header__link">Saved articles</li>
                <button className="header__button">Sign in</button>
            </ul>
        </header>
    )
}

export default Header;