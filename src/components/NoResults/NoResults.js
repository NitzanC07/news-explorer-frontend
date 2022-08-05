function NoResults(props) {

    return (
        <section className="no-result">
            <img 
                className="no-result__icon"
                src={props.notFoundIcon}
                alt="Nothing found"
            />
            <h2 className="no-result__title">Nothing Found</h2>
            <p className="no-result__text">
                Sorry, but nothing matched your search terms.
            </p>
        </section>
    )
}

export default NoResults;
