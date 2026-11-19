

function StudentCard({name, role, skills, completed}) {
    return(
        <>
            <div className="student-Card">
                <h3>{name}</h3>
                <p>Role: {role}</p>
                <p>Skills:
                    {skills.map((skill, index) => (
                        <span className="span-badge" key={`${skill}--${index}`}>{skill}</span>
                    ))}
                </p>
                <p>Completed Task: {completed}</p>
            </div> 
        </>
    );
}

export default StudentCard;