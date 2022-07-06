import Popup from '../Popup/Popup';
// import { Link } from 'react-router-dom';

function PopupWithForm({name, isOpen, onClose, ...props}) {

    // console.log(props);

    function openDifferentPopup() {
        onClose();
        props.handleDifferentPopup();
    }

    return(
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <form className="popup__form">
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button className="popup__submit-button button">{props.buttonText}</button>
                <p className="popup__text">or 
                    <a className="popup__link" onClick={openDifferentPopup}> {props.text} </a>
                </p>
            </form>
        </Popup>
        
    )
}

export default PopupWithForm;