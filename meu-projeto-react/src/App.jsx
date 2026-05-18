import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import gatostvgirl from './gatostvgirl.jpg'
import { Routes, Route, Link } from 'react-router-dom'
import Playlist from './Playlist'

function Body() {
  const[play, setPlay] = useState(false)
  return (
    <>
    <div className='divpae2'>
    <div className='divpae'>
      <div className="principal">
      <img src={gatostvgirl} alt="foto do álbum" width={800} height={872}/>
      <p className='nomebanda'>TV Girl, Mac De Marco</p>
      </div>
   <Link to="/playlist">
      <button className='playalbum'
      onClick={() => setPlay(!play)} > <span>{play ? '⏸' : '▶'}</span> 
      </button>
   </Link>
      </div>
      </div>
    </>
  ) 
}
function App() {
  return (
    <Routes>

      <Route path="/" element={<Body />} />

      <Route path="/playlist" element={<Playlist />} />

    </Routes>
  )
}
export default App