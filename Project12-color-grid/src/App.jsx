import React from "react"
import padsData from "./padsData.js"
import Pad from "./pads.jsx"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const toggle = (id) => {
      setPads((prevPads) => {
        return prevPads.map(
          p => p.id === id ? {...p, on:!p.on} : p
        )
      })
    }

     const buttonElements = pads.map(pad => (
        <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} toggle={toggle}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}

