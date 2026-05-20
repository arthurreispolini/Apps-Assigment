import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Playlist.css'
import Marco from './Marco.jpg'
import gatostvgirl from './gatostvgirl.jpg'
import { LuShuffle } from 'react-icons/lu'
import { FiDownload } from 'react-icons/fi'
import { FiUserPlus } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { LuClock } from 'react-icons/lu'
import { FaMusic } from 'react-icons/fa'
import { FaPlay, FaPause } from 'react-icons/fa';
import chambler from './chambler.mp3'

function Playlist() {
   const[play2, setPlay2] = useState(false)
   const [shuffle, setShuffle] = useState(false)
   const [baixado, setBaixado] = useState(false)
   const [baixado2, setBaixado2] = useState(false)
  const [tocando, setTocando] = useState(false);
  const audioRef = useRef(null);

  const urlMusica =chambler;

  const alternarPlay = () => {
    if (tocando) {
      audioRef.current.pause(); 
    } else {
      audioRef.current.play();  
    }
    setTocando(!tocando); 
  };

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
      <div className="container-playlist">
      <audio ref={audioRef} src={urlMusica} />
      <button className="playalbum2" onClick={alternarPlay}>
        {tocando ? <FaPause /> : <FaPlay />}
      </button>
    </div>
      <div className='quadrodamusica'>
        <img src={Marco} alt="foto" />
      </div>
      <div>
        <button 
        className={`botao-shuffle ${shuffle ? 'ativo' : ''}`} 
        onClick={() => setShuffle(!shuffle)}
      > 
        <LuShuffle />
      </button>
      </div>
      <div>
        <button 
        className={`botao-download ${baixado ? 'baixado' : ''}`} 
        onClick={() => setBaixado(!baixado)}
      > 
        <FiDownload />
      </button>
      </div>
      <div>
        <button className="botao-adicionar">
  <FiUserPlus />
</button>
      </div>
      <div>
        <button className="botao-opcoes">
  <BsThreeDots />
</button>
</div>
<div>
<button className="botao-busca">
  <FaSearch />
</button>
</div>
<span className='fds'>Ordem personalizada</span>
    </div>
    <div className='tituloplaylist'>
 <p className='poxavida'># &nbsp; &nbsp; Título</p>
 <hr className='hr1'/>
 <p className='poxavida'>Álbum ou podcast</p>
 <hr className='hr2' />
 <p className='poxavida'>Adicionada em</p>
 <hr className='hr3' />
 <span className="icone-relogio">
  <LuClock />
</span>
    </div>
    <hr className='hrfora' />
    <br />
    <div className='cardmusic'>
<div className="capa-padrao">
  <FaMusic />
</div>
<div className='musiccard'>
  <img src={Marco} alt="foto" />
</div>
<p className='pcardmusic'>Chambler Of Reflection</p>
<p className='psla1'> Salad Days</p>
<p className='psla2'> 19 de jun. de 2023</p>
<p className='psla3'>3:52</p>
</div> 
    </div>  
  )
}

export default Playlist