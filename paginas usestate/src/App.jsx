import { useState } from 'react'
import './App.css'
import Contato from './pages/Contato'
import Home from './pages/Home'
import MeusLegos from './pages/MeusLegos'

function App() {



  const [pagina, setPagina] = useState(<Home />)



  return (
    <>

    <nav>


    <button  onClick={() => setPagina(<Home />)}>HOME</button>
    <button  onClick={() => setPagina(<Contato />)}>CONTATO</button>
    <button  onClick={() => setPagina(<MeusLegos />)}>LEGOS</button>


    </nav>

    {pagina}

 
    </>
  )
}

export default App
