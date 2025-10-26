import { useState } from "react"



export default function Pad(props) {
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on": ""}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}

