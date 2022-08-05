import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm"

function PopupSignup(props) {

    // console.log(`Popup sign up: ${props}`);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const isInputsValid = email && password && username ? true : false;
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit({email, password, username})
    }

    return(
        <PopupWithForm 
            isOpen={props.isOpen ? 'popup_open' : ''}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            handleDifferentPopup={props.handleDifferentPopup}
            isInputsValid={isInputsValid}
            title="Sign up"
            buttonText="Sign up"
            text="Sign in"
        >
            <label className="popup__field">Email
                <input 
                    type="email" 
                    className="popup__input popup__input_content_email" 
                    id="input-email-signup" 
                    name="email" 
                    placeholder="Enter Email" 
                    minLength="2" 
                    maxLength="40" 
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <span className="input-email-error"></span>
            </label>

            <label className="popup__field">Password
                <input 
                    type="password" 
                    className="popup__input popup__input_content_password" 
                    id="input-password-signup" 
                    name="password" 
                    placeholder="Enter password" 
                    minLength="2" 
                    maxLength="200" 
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                />
                <span className="input-username-error"></span>
            </label>

        </PopupWithForm>
    )
}

export default PopupSignup;