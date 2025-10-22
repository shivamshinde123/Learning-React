import '../css/Header.css'
import globe_file from '../assets/Globe.png'

export const Header = () => {
    return (
        <header>
            <nav>
                <img src={globe_file} alt="globe-logo" className='globe-logo'/>
                <span className='title'>My Travel Journal</span>
            </nav>
        </header>
    )
}
