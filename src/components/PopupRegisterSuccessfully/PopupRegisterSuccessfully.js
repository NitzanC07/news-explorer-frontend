import PopupWithForm from "../PopupWithForm/PopupWithForm"

function PopupRegisterSuccessfully(props) {

    console.log(props);

    return(
        <PopupWithForm 
            isOpen={props.isOpen ? 'popup_open' : ''}
            title="Registration successfully completed!"
            text="Sign in"
        >
            

        </PopupWithForm>
    )
}

export default PopupRegisterSuccessfully;