function SearchForm(props) {

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('Search keyword');
    }

    return(
        <div className="search-form">
            <h2 className="search-form__title">What's going on in the world?</h2>
            <p className="search-form__text">Find the latest news on any topic and save them in your personal account.</p>
            <form 
                className="search-form__search-field"
                onSubmit={handleSubmit}
            >
                <input type='text' className="search-form__input" placeholder="Enter topic"/>
                <button type="submit" className="search-form__button">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;