import closeButton from '../../images/close.svg';

function PopupWithForm({isOpen, ...props}) {

    console.log(props);

    return(
        <div className={`popup ${isOpen}`} >
            <div className="popup__container">
                <button className="popup__close-button">
                    <img src={closeButton} alt="Close button" />
                </button>
                <form className="popup__form">
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__submit-button button">{props.buttonText}</button>
                    <p className="popup__text">or {props.text}</p>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;