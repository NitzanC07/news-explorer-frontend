import PopupWithInfo from "../PopupWithInfo/PopupWithInfo";

function PopupRegisterSuccessfully(props) {

    function openSignin() {
        props.onClose();
        props.handleSignin();
    }

    return(
        <PopupWithInfo 
            isOpen={props.isOpen ? 'popup_open' : ''}
            onClose={props.onClose}
        >
            <h2 className="popup__title">{props.title}</h2>
            <p 
                className="popup__link-info"
                onClick={openSignin}
            >
                Sign in
            </p>

        </PopupWithInfo>
    )
}

export default PopupRegisterSuccessfully;