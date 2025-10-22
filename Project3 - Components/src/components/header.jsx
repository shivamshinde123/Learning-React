import reactLogo from '../assets/react.svg'
import '../css/header.css'

export function Header() {
    return (
        <header>
            <img src={reactLogo} alt="react-logo" />
            <nav>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}