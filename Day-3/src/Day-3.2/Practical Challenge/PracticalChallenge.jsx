import './PracticalChallenge.css'
import { useState } from "react";

function PracticalChallenge() {
    const [message, setMessage] = useState(false);
    const [initialStudents, setInitialStudents] = useState([
        { id: 1, name: "Aarav", course: "MERN" },
        { id: 2, name: "Priya", course: "React" },
        { id: 3, name: "Neel", course: "Node.js" }
    ]);

    function displayClick(){
        setMessage(!message);
    }

    function addTasks(){
        const addNew = {
            id: Date.now(),
            name: "New Person",
            course: "any code"
        }

        setInitialStudents((proviou)=> [
            ...proviou, addNew
        ])
    }

    return (
        <div className="practical-group">
            <div className="btn text-center">
                <button onClick={displayClick}>
                    {message? "Hide Message" : "Show Message"}
                </button>

                <button onClick={addTasks}>Add new student</button>
            </div>
            {message &&
                initialStudents.length > 0? (
                    <div className="practical-list">
                        {initialStudents.map(task=> (
                            <div className="card" key={task.id}>
                                <h3>{task.name}</h3>
                                <p>{task.course}</p>
                            </div>
                        ))}
                    </div>
                ) :
                (
                    <p className='empty'>Empty list initialStudents</p>
                )
            }
            <p className='footer-p'>Student Total: {initialStudents.length}</p>
        </div>
    )
}

export default PracticalChallenge