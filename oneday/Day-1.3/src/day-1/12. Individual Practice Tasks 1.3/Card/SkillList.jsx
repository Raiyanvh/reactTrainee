

function SkillList({title, name, skills}) {
    return(
        <>
            <article className="skilllist-card">
                <div className="profile-circle">
                    <h3>{title}</h3>
                </div>
                <h1>{name}</h1>
                <ul>
                    {skills.length > 0? 
                        ( skills.map((skill, index) => (
                            <li key={`${skill}--${index}`}>{skill}</li>
                        ))) :
                        (
                            <p>No skills available.</p>
                        )
                    }
                </ul>
            </article>
        </>
    );
}

export default SkillList;