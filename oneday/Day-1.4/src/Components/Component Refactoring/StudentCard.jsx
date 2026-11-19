
function StudentCard({no, name, program, attendance}) {
  return (
    <div>
        <div className="card student-card">
            <h3 className="text-center">ID No: {no}</h3>
            <h2>{name}</h2>
            <p><b>Program : </b>{program}</p>
            <p className="attendance">Attendance: 
                <span className={attendance? "Present" : "Absent"}>
                    {attendance? "Present" : "Absent"}
                </span>
            </p>
        </div>
    </div>
  )
}

export default StudentCard