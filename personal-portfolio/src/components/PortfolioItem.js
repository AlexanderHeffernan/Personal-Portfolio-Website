function PortfolioItem({ title, description, tags, link }) {

    return (
        <div className="PortfolioItem" id="PortfolioItem">
            <h4>{title}</h4>
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

