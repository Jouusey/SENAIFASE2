import Titulo from "../components/Titulo"
import './Sorteio.css'


import { useState } from "react"





export default function Sorteio() {

  
 const [numero, setNumero] = useState()

  function sortear(){
  

      let numeroAleatorio = Math.floor(Math.random() * 10)

      setNumero(numeroAleatorio) 

      alert(`VENDEU ${numeroAleatorio}`)
    
}

function aumentar(){
    setNumero(numero + 1)
}

function diminuir(){
    setNumero(numero - 1)
}

  return (
    <div className="Sorteio-container">
    
    <button onClick={aumentar}>+</button>

        <button onClick={sortear} className="btn" >{numero}</button>
        
        <div className="numeroaleatorio">
       
        </div>

    <button onClick={diminuir}>-</button>
    
    <div className="RESULTADO">

    </div>


    </div>
  )
}
