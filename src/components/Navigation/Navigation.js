import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {

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
        <nav className="navigation-menu">
            <ul className="navigation-menu__links">
                <li className="navigation-menu__item navigation-menu__item_active" style={props.name === 'home' && !isMobile ? props.borderStyle : {} }>
                    <Link className="navigation-menu__link" style={props.textStyle} to='/'>Home</Link>
                </li>
                <li className="navigation-menu__item" style={ props.name === 'saved-articles' && !isMobile ? props.borderStyle : {} }>
                    <Link className="navigation-menu__link " style={props.textStyle} to='/saved-news'>Saved articles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationMenu;

