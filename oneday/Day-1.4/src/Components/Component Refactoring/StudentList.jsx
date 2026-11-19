import Footer from "./Footer"
import Header from "./Header"
import StudentCard from "./StudentCard"
import './Student.css'

function StudentList() {
    const students = [
        {id: 1, no: "123-124-142", name: "Kais", program: "BCA", attendance: true},
        {id: 2, no: "123-156-101", name: "Raiyan", program: "B.Com", attendance: false},
        {id: 3, no: "123-214-198", name: "Aamir", program: "12th", attendance: true},
    ]
  return (
    <div>
        <section className="group-componentName">
            <h1 className="text-center">Question 32 — Component Refactoring</h1>
            <div className="student-list">
                <Header/>
                <div className="list-grid">
                    {students.map(student => (
                        <StudentCard
                            key={student.id}
                            no = {student.no}
                            name = {student.name}
                            program = {student.program}
                            attendance = {student.attendance}
                        />
                    ))}
                </div>
                <Footer/>
            </div>
        </section>
    </div>
  )
}

export default StudentList