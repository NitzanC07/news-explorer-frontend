import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews(props) {

    return(
        <div className="saved-news">
            <SavedNewsHeader  
                handleSignout={props.handleSignout}
            />
        </div>
    )
}

export default SavedNews;
