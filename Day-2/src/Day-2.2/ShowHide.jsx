import { useState } from "react";

function ShowHide() {
    const [message, setMessage] = useState(false);
    function isVaild(){
        setMessage(!message);
    }
  return (
    <div className="showhide">
        <h1>Exercise 2: Show and Hide</h1>
        <h3>Show and Hide</h3>
        <h3>{message? "Show" : "Hide"}</h3>
        <button onClick={isVaild}>
            {message? "Show Message" : "Hide Message"}
        </button>

        {/* {message && (
            <p>Hello! Welcome to React Learning.</p>
        )} */}
    </div>
  )
}

export default ShowHide;