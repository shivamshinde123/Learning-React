
import "../css/joke.css"

export default function JokeComponent(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p> 
            <hr />
        </>
    )
}

