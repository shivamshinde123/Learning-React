
import "../css/joke.css"
import { useState } from "react"

export default function JokeComponent(props) {

    const [isShown, setIsShown] = useState(false)
    const [buttonText, setButtonText] = useState("Show the punchline")

    const togglePunchlineVisibility = () => {
        setIsShown((prev) => {
            return !prev
        })
    
    }

    return (
        <>
            <h3>New Joke</h3>
            {props.setup && <p className="setup">{props.setup}</p>}
            <p className="punchline">{isShown && props.punchline}</p> 
            <button onClick={togglePunchlineVisibility}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </>

        // This format is recommended
        // <>
        //     <h3>New Joke</h3>
        //     {props.setup ? <p className="setup">{props.setup}</p>: null}
        //     <p className="punchline">{isShown ? props.punchline : null}</p> 
        //     <button onClick={togglePunchlineVisibility}>{isShown ? "Hide" : "Show"} punchline</button>
        //     <hr />
        // </>
    )
}

