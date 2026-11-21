import './StudentList.css'

function StudentList() {
    const students = [
        {id: 1, name: "Arsh", course: "React.js"},
        {id: 2, name: "Kais", course: "Power BI"},
        {id: 3, name: "Ammar", course: "Excel"},
        {id: 4, name: "Aamir", course: "Word"},
        {id: 5, name: "Rahil", course: "Back End Web Development"}
    ]
  return (
    <div>
        <div className="studentList allstudent-grid">
            {students.map(student => (
                <div className="card" key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.course}</p>
                </div>
            ))}
        </div>
        <h2>Student Total: {students.length}</h2>
    </div>
  )
}

export default StudentList