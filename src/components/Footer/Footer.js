import facebookLogo from '../../images/logo-facebook.svg';
import githubLogo from '../../images/logo-github.svg';

function Footer(props) {

    return(
        <div className="footer">
            <p className='footer__title'>© 2022 Supersite, Powered by News API</p>
            <ul className="footer__links">
                <li className="footer__link">Home</li>
                <li className="footer__link">Practicum by Yandex</li>
                <li className="footer__link">
                <img src={githubLogo} alt="GitHub's logo" />
                </li>
                <li className="footer__link">
                    <img src={facebookLogo} alt="Facebook's logo" />
                </li>
            </ul>
        </div>
    )
}

export default Footer;