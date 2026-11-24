import { useState } from "react"
import './CharacterCounter.css'

function CharacterCounter() {
    const [character, setCharacter] = useState("");

    // const [error, setError] = useState({});
    // const [show, setShow] = useState(false);

    function handleChange(event) {

        setCharacter(event.target.value)

        // const {name, value} = event.target
        // const newErrors = {}

        // setCharacter((previous) => ({
        //     ...previous,
        //     [name]: value
        // }));

        // if(character.message.length > 80){
        //     newErrors.message = "100 character more"
        //     setShow(true);
        // } else if(character.message.length > 80) {
        //     setShow(false);
        // }
        // setError(newErrors);
    }

    const characterCounter = character.length;
    const remianing = 100 - characterCounter;
  return (
    <div className="card-form">
        <h1 className="text-center">Exercise 3: Live Character Counter</h1>
        <form className="charcter">
            <h3 className="text-center">Charcter Counter: {characterCounter} / 100</h3>
            <textarea 
                name="message" 
                // value={character.message}
                value={character}
                onChange={handleChange}
                placeholder="Message Typing Charcter Counter"
            ></textarea>
            {character.length >= 80 && (
                <p className="message-show">Warning: reached 80 character</p>
            )}

            <p className="margin-top">Remianing: {remianing}</p>
        </form>
    </div>
  )
}

export default CharacterCounter