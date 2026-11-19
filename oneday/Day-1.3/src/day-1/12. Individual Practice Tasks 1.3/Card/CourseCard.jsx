
function CourseCard({name, duration, level, publication}){
    return(
        <>
            <article className="course-article">
                <h1>{name}</h1>
                <p>Duration: {duration} Hours</p>
                <p>Level: {level}</p>
                <button className={`badge ${publication? "publicat-green" : "draft-warn"}`}>{publication? "Published" : "Draft "}</button>
            </article>
        </>
    );
}

export default CourseCard;


