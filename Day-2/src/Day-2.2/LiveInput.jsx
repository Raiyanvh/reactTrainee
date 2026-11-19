import { useState } from "react"

function LiveInput() {
    const [users, setUsers] = useState("");

    function textInput(event) {
        const textLength = event.target.value;
        setUsers(textLength)
    }
  return (
    <div className="liveinput">
        <h1>Exercise 3: Live Input</h1>

        <input type="text" value={users} onChange={textInput} placeholder="Please enter your name"/>

        {users.trim() === ""? 
            (<p className="warn-p">Please enter your name</p>) :
            (<p>Counter: {users.length}</p>)
        }
        
    </div>
  )
}

export default LiveInput;