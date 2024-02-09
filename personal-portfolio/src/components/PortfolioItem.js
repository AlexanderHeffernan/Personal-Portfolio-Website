function PortfolioItem({ title, description, tags, link, linkTitle, slideshow, download }) {

    return (
        <div className="PortfolioItem" id="PortfolioItem">
            <div className="TopRow">
                <h4>{title}</h4>
                {slideshow != null && (
                    <p onClick={slideshow}><i className="fa-solid fa-images"></i></p>
                )}
            </div>
            <p>{description}</p>
            {link != null && (
                <a href={link} rel="noopener noreferrer" target="_blank">
                    {linkTitle != null && (
                        <span>{linkTitle}</span>
                    )}
                    {linkTitle == null && (
                        <span>Read more</span>
                    )}
                </a>
            )}
            <div className="BottomRow">
                {tags.map((tag, index) => (
                    <div className="Tag" key={index}>{tag}</div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioItem;

