import './css/App.css'
import Home from "./pages/home"
import { Routes, Route } from "react-router-dom"
import Favorite from './pages/favorites';
import NavBar from './components/NavBar';

function App() {

  const movieNumber = 2;

  return (
    <div>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorite></Favorite>}></Route>
        </Routes>
      </main>
    </div>
  )
}




export default App
