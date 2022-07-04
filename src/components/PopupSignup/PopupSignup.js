import PopupWithForm from "../PopupWithForm/PopupWithForm"

function PopupSignup(props) {

    // console.log(props);

    return(
        <PopupWithForm 
            isOpen={props.isOpen ? 'popup_open' : ''}
            onClose={props.onClose}
            handleDifferentPopup={props.handleDifferentPopup}
            title="Sign up"
            buttonText="Sign up"
            text="Sign in"
        >
            <label className="popup__field">Email
                <input 
                    type="email" 
                    className="popup__input popup__input_content_email" 
                    id="input-email" 
                    name="email" 
                    placeholder="Enter Email" 
                    minLength="2" 
                    maxLength="40" 
                    // value={name || ''}
                    // onChange={handleChangeNameInput}
                    required 
                />
                <span className="input-email-error"></span>
            </label>

            <label className="popup__field">Password
                <input 
                    type="password" 
                    className="popup__input popup__input_content_password" 
                    id="input-password" 
                    name="password" 
                    placeholder="Enter password" 
                    minLength="2" 
                    maxLength="200" 
                    // value={description || ''}
                    // onChange={handleChangeAboutInput}
                    required 
                />
                <span className="input-password-error"></span>
            </label>

            <label className="popup__field">Username
                <input 
                    type="text" 
                    className="popup__input popup__input_content_username" 
                    id="input-username" 
                    name="username" 
                    placeholder="Enter your username" 
                    minLength="2" 
                    maxLength="200" 
                    // value={description || ''}
                    // onChange={handleChangeAboutInput}
                    required 
                />
                <span className="input-username-error"></span>
            </label>

        </PopupWithForm>
    )
}

export default PopupSignup;