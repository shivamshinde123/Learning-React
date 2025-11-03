

import React from 'react'
import { useContext } from 'react'
import counterContext from '../context/context'

const Component1 = () => {

    const counter = useContext(counterContext)
    return (
        <div>
            <h2>Component1</h2>
            <p>Here is the value of counter fetched from App.jsx: {counter}</p>
        </div>
    )
}

export default Component1
