import './App.css'
import JokeComponent from './components/joke'
import jokesData from "./data/jokes_data.js"

function App() {
  const JokeElements = jokesData.map((joke) => {
    return <JokeComponent setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <>
    {JokeElements}
    </>
  )
}

export default App

