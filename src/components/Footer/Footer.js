import facebookLogo from '../../images/logo-facebook.svg';
import githubLogo from '../../images/logo-github.svg';
import { Link } from 'react-router-dom';

function Footer(props) {

    return(
        <div className="footer">
            <p className='footer__title'>© 2022 Supersite, Powered by News API</p>
            <ul className="footer__links">
                <li className="footer__item">
                    <Link className='footer__link' to='/'>
                        Home
                    </Link>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href='https://www.practicum100.org/' target='_blank'>
                        Practicum by Yandex
                    </a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href='https://github.com/NitzanC07' target='_blank'>
                        <img src={githubLogo} alt="GitHub's logo" />
                    </a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href='https://www.facebook.com/nitzan07' target='_blank'>
                        <img src={facebookLogo} alt="Facebook's logo" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;