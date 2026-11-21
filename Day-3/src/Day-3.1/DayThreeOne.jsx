import { useState } from "react"
import './DayThreeOne.css'

// 3. Using if Statements

function LoginMessage({isLoggedIn}){
  if(isLoggedIn){
    return <h2>Welcome back!</h2>
  }

  return <h2>Please log in.</h2>
  
}


// ====================================================================
// 4. Using the Ternary Operator

function LoginButton({isLoggedIn}){
  return(
    <button>
      {isLoggedIn? "Logout" : "Login"}
    </button>
  )
}


// ====================================================================
// 5. Using Logical AND (&&)

function Notification({hasNotification}){
  return(
    <div>
      <h2>Dashboard</h2>
      {hasNotification && (
        <p>You have a new notification!</p>
      )}
    </div>
  )
}


// ====================================================================
// 6. Conditional Rendering with State

function ToggleMessage(){
  const [message, setMessage] = useState(false);

  return(
    <div>
      <button onClick={()=> setMessage(!message)}>
        {message? "Hide Message" : "Show Message"}
      </button>

      {message && <p>Welcome to React!</p>}
    </div>
  );
}


// ====================================================================
// 7. Introduction to List Rendering

function StudentList() {
  const students = ["Aarav", "Priya", "Neel", "Krisha"];

  return(
    <ul className="none-list">
      {students.map(student => (
        <li>{student}</li>
      ))}
    </ul>
  )
}


// ====================================================================
// 8. Rendering Arrays of Objects

function StudentListSecond() {
  const students = [
    {id: 101, name: "Aarav", course: "MERN"},
    {id: 102, name: "Priya", course: "React"},
    {id: 103, name: "Neel", course: "Node.js"}
  ];

  return(
    <div className="student-gruop">
      <h2 className="text-center">Students</h2>
      <div className="all-list">
        {students.map(student => (
          <div className="card">
            <h3>{student.name}</h3>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



// ====================================================================
// 10. Combining State and List Rendering

function StudentListThrid() {
  const [students, setStudents] = useState([
    {id: 1, name: "Aarav"},
    {id: 2, name: "Priya"}
  ]);

  function addStudent(){
    const newStudent = {
      id: Date.now(),
      name: "New Student"
    }
    setStudents((previous) => [...previous, newStudent]);
  }

  return(
    <div className="student-three">
      <h2 className="text-">Student: {students.length}</h2>
      <div className="btn">
        <button onClick={addStudent}>Add Student</button>
      </div>

      {students.length === 0?
        (<p>No Student available.</p>) :
        (
          <ul>
            {students.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}



// ====================================================================
// 12. Complete Example: Task List

function TasksList(){
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn JSX", completed: false },
    { id: 2, title: "Practise useState", completed: true }
  ]);

  function toggleTask(id) {
    setTasks((proviousTasks) => 
      proviousTasks.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }

  return(
    <div className="taskslist">
      <h2 className="text-center">My Tasks</h2>
      {tasks.length === 0?
        (
          <p>No tasks available.</p>
        ) :
        (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <span 
                  style={{
                    textDecoration: task.completed?
                    "line-through" : "none"
                  }}>
                  {task.title}
                </span>
                <button onClick={()=> toggleTask(task.id)}>
                  {task.completed? "Undo" : "Complete"}
                </button>
              </li>
            ))}
          </ul>
        )
      }

    </div>
  );
}




function DayThreeOne() {
  return (
    <div className="container">
      {/* 3. Using if Statements */}
      <div className="container-box">
        <h1 className="text-heading">3. Using if Statements</h1>
        <LoginMessage isLoggedIn={true}/>
      </div>

      {/* 4. Using the Ternary Operator */}
      <div className="container-box">
        <h1 className="text-heading">4. Using the Ternary Operator</h1>
        <LoginButton isLoggedIn={false} />
      </div>
      
      {/* 5. Using Logical AND (&&) */}
      <div className="container-box">
        <h1 className="text-heading">5. Using Logical AND (&&)</h1>
        <Notification hasNotification={true}/>
      </div>

      {/* 6. Conditional Rendering with State */}
      <div className="container-box">
        <h1 className="text-heading">6. Conditional Rendering with State</h1>
        <ToggleMessage/>
      </div>

      {/* 7. Introduction to List Rendering */}
      <div className="container-box">
        <h1 className="text-heading">7. Introduction to List Rendering</h1>
        <StudentList/>
      </div>

      {/* 8. Rendering Arrays of Objects */}
      <div className="container-box">
        <h1 className="text-heading">8. Rendering Arrays of Objects</h1>
        <StudentListSecond/>
      </div>

      <div className="container-box">
        <h1 className="text-heading">10. Combining State and List Rendering</h1>
        <StudentListThrid/>
      </div>

      {/* 12. Complete Example: Task List */}
      <div className="container-box">
        <h1 className="text-heading">12. Complete Example: Task List</h1>
        <TasksList/>
      </div>

    </div>
  )
}

export default DayThreeOne