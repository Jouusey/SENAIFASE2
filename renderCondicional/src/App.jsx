
import { useState } from 'react'
import './App.css'
import OlaUsuario from './components/OlaUsuario'
import AreaParaAdultos from './components/AreaParaAdultos'
import Login from './components/Login'

function App() {

  const[logado, setLogado] = useState(false)
  const[idade, setIdade] = useState(0)

  function logar() {

    setLogado(true)
    
  }







  return (
    <>  

<div className="render-container">



<button onClick={logar} >LOGAR</button>
<button onClick={() => {setLogado(false)}}>DESLOGAR</button>
<button onClick={() => setLogado(!logado)}>ALTERNAR</button>



</div>

<div className="render-container">




<button onClick={() => setIdade(idade - 1)}>-</button>

{idade}

<button onClick={() => setIdade(idade + 1)}>+</button>


{idade>=18 && logado && <AreaParaAdultos />}


<div className="render-container">

{logado ? <OlaUsuario /> : <Login />}


</div>

</div>

    </>
  )
}

export default App
