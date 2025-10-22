import './App.css'
import { Header } from './components/Header.jsx'
import { Card } from './components/Card.jsx'

import TravelCard from "./data/data.js"

// Hard coded
// function App() {
//   return (
//     <>
//       <Header />
//       <Card 
//         img_src="https://scrimba.com/links/travel-journal-japan-image-url"
//         country="Japan"
//         location_link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//         place="Mount Fuji"
//         dates="12 Jan, 2021 - 24 Jan, 2021"
//         place_desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
//       />
//       <Card 
//         img_src="https://scrimba.com/links/travel-journal-australia-image-url"
//         country="Australia"
//         location_link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//         place="Sydney Opera House"
//         dates="22 May, 2023 - 8 Jun, 2023"
//         place_desc="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
//       />
//       <Card 
//         img_src="https://scrimba.com/links/travel-journal-norway-image-url"
//         country="Norway"
//         location_link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//         place="Geirangerfjord"
//         dates="01 Oct, 2024 - 18 Nov, 2024"
//         place_desc="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
//       />
//     </>
//   )
// }

// export default App

// Use of .map
function App() {
  const TravelData = TravelCard.map((card) => {
    return <Card
      key={card.id}
      {...card}
      />
  })
  return (
    <>
      <Header />
      {TravelData}
    </>
  )
}

export default App
