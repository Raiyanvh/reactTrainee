
function DirectoryStudentCard({name, track, skills, completed}) {
  return (
    <div>
      <article className="card studentcard">
        <div className="track-img">
          <small>Track Learning</small>
          <h2>{track}</h2>
        </div>

        <div className="content">
          <h4>{name}</h4>
          <label>Skills: 
            <ul >
              {skills.length > 0 ? 
                (skills.map((skill, index) => (
                    <li key={`${skill}--${index}`}>{skill}</li>
                ))) :
                (
                  <p className="message-empty"> Student Array Empty</p>
                )

              }
            </ul>
          </label>
          <p className="task-completed">Completed Tasks: ✅{completed}</p>
        </div>
      </article>
    </div>
  )
}

export default DirectoryStudentCard;