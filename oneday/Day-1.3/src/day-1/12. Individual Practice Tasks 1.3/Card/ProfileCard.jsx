

function ProfileCard({name, role = "Backend Developer", department, Completedcourses}) {
    return(
        <>
            <article className="profilecard">
                <h1>{name}</h1>
                <p>Role: {role}</p>
                <p>Department: {department}</p>
                <p>Completed Course: {Completedcourses}</p>
            </article>
        </>
    );
}

export default ProfileCard;