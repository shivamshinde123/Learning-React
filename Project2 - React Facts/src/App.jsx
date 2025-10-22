import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <div className="container">
        <div className="logo-section">
          <img src={reactLogo} alt="react-logo" className='logo' />
        </div>
        <div className="content-section">
          <h1>Fun Facts about React!</h1>
          <ul>
            <li>
              I want to build my own full stack app with AI integration. React is a start towards that goal.
            </li>
            <li>Very demanded skills to have</li>
            <li>High job opportunities</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
