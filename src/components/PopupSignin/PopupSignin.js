import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm"

function PopupSignin(props) {

    // console.log(props);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(email, password)
    }

    return(
        <PopupWithForm 
            isOpen={props.isOpen ? 'popup_open' : ''}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            handleDifferentPopup={props.handleDifferentPopup}
            name="signin"
            title="Sign in"
            buttonText="Sign in"
            text="Sign up"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <span className="input-password-error"></span>
            </label>

        </PopupWithForm>
    )
}

export default PopupSignin;