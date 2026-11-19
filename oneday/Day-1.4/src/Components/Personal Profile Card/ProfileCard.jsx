

function ProfileCard({id, name, role = "Student" , skills, completedCourses}){
    return(
        <>
            <div className="card profile-Card">
                <div className="profile-id">{id}</div>
                <div className="title-heading">
                    <h3>{name}</h3>
                </div>
                <p><strong>Role: </strong>{role}</p>
                <p className="skills">
                    <strong>Skills:</strong>
                    {skills.length > 0 ? 
                        (
                            skills.map((skill, index) => (
                                <span key={`${skill}--${index}`}>{skill}</span>
                            ))
                        ) : 
                        (
                            <span>No Skills Add yet.</span>
                        )
                    }
                </p>
                <p>✔️ Completed Course: {completedCourses}</p>
            </div>
        </>
    )
}

export default ProfileCard;