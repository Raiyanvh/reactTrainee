import LoginStatus from "./Exercise1 Login Status/LoginStatus"
import StudentList from "./Exercise2 Student List/StudentList"
import CompletedTasks from "./Exercise3 Completed Tasks/CompletedTasks"
import PracticalChallenge from "./Practical Challenge/PracticalChallenge"

function CodingExercises() {
  return (
    <div className="container">
        <div className="container-box">
            <h1 className="text-center">Exercise 1: Login Status</h1>
            <LoginStatus/>
        </div>

        <div className="container">
            <h1 className="text-center">Exercise 2: Student List</h1>
            <StudentList/>
        </div>

        <div className="container">
            <h1 className="text-center">Exercise 3: Completed Tasks</h1>
            <CompletedTasks/>
        </div>

        <div className="container">
            <h1 className="text-center">Section D — Practical Challenge</h1>
            <PracticalChallenge/>
        </div>

    </div>
  )
}

export default CodingExercises