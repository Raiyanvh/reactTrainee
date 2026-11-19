function CatalogueCard({title, duration, enrolment}) {
    return(
        <>
            <div className="card Catalogue-Card">
                <div className="title-heading">
                    <h3>{title}</h3>
                </div>
                <p>Duration: {duration} hours</p>
                <p className={`enrolment ${enrolment? "open" : "close"}`}>
                    Enrolment: <span>{enrolment? "Open" : "Close"}</span>
                </p>
            </div>
        </>
    );
}

export default CatalogueCard;