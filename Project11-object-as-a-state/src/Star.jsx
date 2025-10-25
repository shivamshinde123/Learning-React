
import starFilled from "./assets/star-filled.png"
import starEmpty from "./assets/star-empty.png"
import './star.css'

export default function Star(props) {

    return (
        <section>
            <button
                onClick = {props.handleClick}
                aria-pressed={props.isFilled}
                aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
                className="favorite-button"
            >
                <img src={props.isFilled ? starFilled : starEmpty} alt={props.isFilled ? "Filled Star Image" : "Empty Star Image"} className="favorite" />
            </button>
        </section>
    )
}


















