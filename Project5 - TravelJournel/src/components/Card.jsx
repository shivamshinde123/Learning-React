import '../css/Card.css'
import markerImage from '../assets/marker.png'

// Hard coded 
// export const Card = (props) => {
//     return (
//         <>
//             <main>
//                 <div className="card-image">
//                     <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="card-image" />
//                 </div>
//                 <div className="card-content">
//                     <div className="card-content-location">
//                         <img src={markerImage} alt="marker-image" className='marker-image' />
//                         <span className='location-name'>Japan</span>
//                         <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className='card-location-link'>View on Google Maps</a>
//                     </div>
//                     <h1 className='card-title'>Mount Fuji</h1>
//                     <div className="card-text-info">
//                         <h3 className='card-date'>Dates: 12 Jan, 2021 - 24 Jan, 2021</h3>
//                         <p className='card-description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }

// Use of props
export const Card = (props) => {
    console.log(props)
    return (
        <>
            <main>
                <div className="card-image">
                    <img src={props.img.src} alt={props.img.alt} />
                </div>
                <div className="card-content">
                    <div className="card-content-location">
                        <img src={markerImage} alt="marker-image" className='marker-image' />
                        <span className='location-name'>{props.country}</span>
                        <a href={props.googleMapsLink} className='card-location-link'>View on Google Maps</a>
                    </div>
                    <h1 className='card-title'>{props.title}</h1>
                    <div className="card-text-info">
                        <h3 className='card-date'>Dates: {props.dates}</h3>
                        <p className='card-description'>{props.text}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

