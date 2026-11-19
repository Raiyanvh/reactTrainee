import '../GroupTask.css';
import StudentCard from './StudentCard';

function StudentList() {
    const students = [
        {id: 1, name: "Amir", role: "Business Clothes", skills: ["Check Cash", "Sell", "Fold Cloth"], completed: 14},
        {id: 2, name: "Raiyan", role: "Assistant Senior", skills: ["Packing Station", "Quantity Check", "Capture"], completed: 10},
        {id: 3, name: "Kais", role: "Frontend Developer", skills: ["HTML", "CSS", "JavaScript", "Git", "React.js"], completed: 5},
        {id: 4, name: "Ammar", role: "Office", skills: ["Excel", "Check Document"], completed: 20},
        {id: 5, name: "Arkan", role: "Designer", skills: ["Figma", "PR"], completed: 15},
        {id: 6, name: "Aasim", role: "Digtal marketing", skills: ["Google Ads", "Affiate Marketing"], completed: 30},
    ]
    return(
        <>
            <h1 className='text-center'>Group Task 1 — Student Directory</h1>
            <div className="student-list">
                {students.map(student => (
                    <StudentCard
                        key={student.id}
                        name = {student.name}
                        role = {student.role}
                        skills = {student.skills}
                        completed = {student.completed}
                    />
                ))} 
            </div>
        </>
    );
}

export default StudentList;