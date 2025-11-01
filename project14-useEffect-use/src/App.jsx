import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [starWarsData, setStarWarsData] = useState(null)
  const [count, setCount] = useState(1)

  console.log("Rendered!")

  // code inside the useEffect runs only and only when the value of count changes
  // this is just for demonstration. here count has no relation or effective on the code inside useEffect
  // ideally this fetching code should be run only one time in the beginning
  // useEffect(() => {
  //   console.log("Effect Ran")
  //   fetch("https://swapi.dev/api/people/1")
  //   .then(res => res.json())
  //   .then(data => setStarWarsData(data))
  // }, [count])

  // Since the data fetch code should be run only one time at the beginning, we should only use []
  useEffect(() => {
    console.log("Side effect ran!")
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div className='ml-5'>
      <h2 className='text-2xl font-bold mb-3'>The charater ID is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)} className='border text-lg p-2 rounded-xl mb-10 bg-black text-white mr-5'>Get Next Character</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)} className='border text-lg p-2 rounded-xl mb-10 bg-black text-white'>Get Previous Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App
