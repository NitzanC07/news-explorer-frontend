import Popup from '../Popup/Popup';

function PopupWithForm({name, isOpen, onClose, ...props}) {

    // console.log(props);

    function openDifferentPopup() {
        onClose();
        props.handleDifferentPopup();
    }

    return(
        <Popup isOpen={isOpen} name={name} onClose={onClose}>
            <form 
                className="popup__form"
                onSubmit={props.onSubmit}>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button 
                    className={`popup__submit-button${props.isInputsValid ? '' : '_disabled'}`}
                    type='submit'
                    disabled={!props.isInputsValid}
                >
                    {props.buttonText}
                </button>
                <p className="popup__text">or 
                    <button 
                        className="popup__link" 
                        onClick={openDifferentPopup}
                    >
                        {props.text}
                    </button>
                </p>
            </form>
        </Popup>
        
    )
}

export default PopupWithForm;