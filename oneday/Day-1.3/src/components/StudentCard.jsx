function StudentCard({students}) {
    return(
        <article className="student-card">
            <h3>{students.name}</h3>
            <p>Track: {students.track}</p>
            <p>Completed tasks: {students.completedTasks}</p>
        </article>
    );
}

export default StudentCard;