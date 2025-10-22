import { useState } from 'react'


function App() {
  const [isImportant, setIsImportant] = useState("Yes")

  const handleClick = () => {
    setIsImportant("Definitely!")
  }

  return (
    <main className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-center text-3xl font-bold mb-5">Is state important to know?</h1>
      <button className='border bg-black text-white p-5 rounded-full hover:bg-white hover:text-black cursor-pointer' onClick={handleClick}>{isImportant}</button>
    </main>
  )
}

export default App
