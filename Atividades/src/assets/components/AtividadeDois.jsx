import React, { useState } from 'react'
import './AtividadeDois.css'




function AtividadeDois() {


    let valentina = 150
    let enzo = 140
    let contador = 0
    
    const[resultados, setResultados] = useState()

    function Calcular() {


      
        while(valentina > enzo){

            valentina = valentina + 2
            enzo = enzo + 3

            contador++

        }

        setResultados(' Levara ' + contador + ' anos para enzo ultrapassar valentina em altura.')
        


    }


  return (
    <div>


        <h1>Exercicio 2</h1>
   

   <button onClick={Calcular} >CALCULAR IDADES</button>


      {resultados}
    </div>
  )
}

export default AtividadeDois
