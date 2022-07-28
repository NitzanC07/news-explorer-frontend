import { useState } from "react";

function SearchForm(props) {

    const [userKeyword, setUserTopic] = useState('');

    function handleSearchKeyword(evt) {
        evt.preventDefault();
        props.handleSearchKeyword(userKeyword);
    }

    return(
        <div className="search-form">
            <div className="search-form__content">
                <h2 className="search-form__title">What's going on in the world?</h2>
                <p className="search-form__text">Find the latest news on any topic and save them in your personal account.</p>
                <form 
                    className="search-form__search-field"
                    onSubmit={handleSearchKeyword}
                >
                    <input 
                        className="search-form__input"
                        type='text'  
                        placeholder="Enter topic" 
                        value={userKeyword}
                        onChange={(e) => setUserTopic(e.target.value)}
                        required
                    />
                    <button type="submit" className="search-form__button">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;