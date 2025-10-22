import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)

  /**
   * Note: If you ever need the old value of state to help you determine the new value of state,
   * you should pass a callback function to your state setter function instead of using state directly. 
   * This callback function will receive the old value of state as its parameter, 
   * which you can then use to determine your new value of state
   */

  const handleIncrement = () => {
    // setCount(count + 1) // This will work but its not recommended
    setCount((preCount) => { // This is recommended - passing callback function to state setter function
      return preCount + 1
    })
  }

  const handleDecrement = () => {
    // setCount(count - 1) // This will work but its not recommended
    setCount((preCount) => { // This is recommended - passing callback function to state setter function
      return preCount - 1
    })
  }

  return (
    <main className='flex flex-col justify-center items-center mt-30'>
      <h1 className='text-3xl font-bold'>How many times will Bob say 'state' in this section?</h1>
      <div className='mt-10 flex flex-row gap-3'>
        <button className='border px-3 rounded-lg bg-black text-white border border-black hover:bg-white hover:text-black' onClick={handleDecrement}>-</button>
        <h2 className='border p-5 rounded-full'>{count}</h2>
        <button className='border px-3 rounded-lg bg-black text-white border border-black border border-black hover:bg-white hover:text-black' onClick={handleIncrement}>+</button>
      </div>
    </main>
  )
}

export default App
