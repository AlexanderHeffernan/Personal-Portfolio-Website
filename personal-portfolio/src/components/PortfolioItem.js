function PortfolioItem({ title, description, tags, link, SlideShow }) {

    return (
        <div className="PortfolioItem" id="PortfolioItem">
            <div className="TopRow">
                <h4>{title}</h4>
                {SlideShow != null && (
                    <a onClick={SlideShow}><i className="fa-solid fa-images"></i></a>
                )}
            </div>
            <p>{description}</p>
            {tags.map((tag, index) => (
                <div className="Tag" key={index}>{tag}</div>
            ))}
            <br />
            <a href={"https://" + link} target="_blank">Read more</a>
        </div>
    )
}

export default PortfolioItem;

