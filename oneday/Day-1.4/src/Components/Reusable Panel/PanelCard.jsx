function PanelCard({title, children}) {
    return(
        <>
            <article className="card panel-card">
                <h2>{title}</h2>
                <div>{children}</div>
            </article>
        </>
    );
}

export default PanelCard;