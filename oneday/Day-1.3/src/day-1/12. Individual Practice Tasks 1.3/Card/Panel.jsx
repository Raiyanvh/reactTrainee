function Panel({title, children}) {
    return(
        <>
            <section className="panel">
                <h1>{title}</h1>
                <div>{children}</div>
            </section>
        </>
    );
}

export default Panel;