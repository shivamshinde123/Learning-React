import '../css/Navbar.css'
import react_logo from '../assets/react.svg'

export function Navbar() {
    return (
        <nav>
            <img src={react_logo} alt="react-logo" />
            <span>ReactFacts</span>
        </nav>
    )
}