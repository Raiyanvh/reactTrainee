import DirectoryStudentCard from "./DirectoryStudentCard";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";
import './DirectoryStudent.css'

function DirectoryStudentList() {
  const students = [
    {id: 1, name: "Arsh", track: "Business", skills: ["Human resource", "Digital Marketing"], completed: 12},
    {id: 2, name: "kais", track: "Data & AI", skills: ["Data Science", "Power BI", "Deep learning"], completed: 50},
    {id: 3, name: "Aamir", track: "Business", skills: [], completed: 2},
    {id: 4, name: "Rahil", track: "Development", skills: ["Front end web development", "Full stack web development"], completed: 35},
    {id: 5, name: "Raiyan", track: "Engineering", skills: ["Robotics"], completed: 35},
    {id: 6, name: "Ammar", track: "Popular", skills: ["Data Science", "Generative AI"], completed: 35}
  ]
  return (
    <div>
      <section className="group-componentName student-directory">
        <PageHeader/>
        <div className="list-grid student-list">
          {students.length > 0? 
            (
              students.map(student => (
                <DirectoryStudentCard
                  key={student.id}
                  name = {student.name}
                  track = {student.track}
                  skills ={student.skills}
                  completed = {student.completed}
                />
              ))
            ) : 
            (
              <p className="message-empty">Studnets Array List</p>
            )
          }
        </div>
        <PageFooter/>
      </section>
    </div>
  )
}

export default DirectoryStudentList;