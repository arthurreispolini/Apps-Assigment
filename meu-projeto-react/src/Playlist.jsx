import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Playlist.css'
import Marco from './Marco.jpg'
import gatostvgirl from './gatostvgirl.jpg'

function Playlist() {
   const[play2, setPlay2] = useState(false)
  return (
    <div className='pae1'>
      <div className='colorheader'>
<div className='headerimg'> 
    <img src={Marco} alt="foto do álbum" width={100} height={100}/>
         <img src={gatostvgirl} alt="foto do álbum"  width={100} height={100} />
        <img src={Marco} alt="foto do álbum" width={100} height={100}/>
     <img src={gatostvgirl} alt="foto do álbum"  width={100} height={100} />
    </div>
    <div className='ladodaimagem'>
     <span>Playlist Particular</span>
     <h1 className='h1ladodaimg'>Playlist #1</h1>
     </div>
    </div>
    <div className='antes_da_playlist'>
      <button className='playalbum2'
      onClick={() => setPlay2(!play2)} > <span>{play2 ? '⏸' : '▶'}</span> 
      </button>
    </div>
    </div>  
  )
}

export default Playlist