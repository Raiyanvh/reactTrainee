function CatalogueCard({title, duration, level, availability}) {
  return (
    <>
      <div className="catalogue-card">
        <h3>{title}</h3>
        <p>Duration: {duration}hours • {level}</p>
        <p className={availability ? "available" : "unavailable"}>
          {availability ? "Available" : "UnAvailable"}
        </p>
      </div>
    </>
  );
}

export default CatalogueCard;
