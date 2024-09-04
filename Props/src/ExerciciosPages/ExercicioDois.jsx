import React, { useState } from 'react'
import './ExercicioDois.css'

export default function ExercicioDois() {



  const [mediaFinal, setMediaFinal] = useState()



    function calcular() {



        let provaNotaUm = Number(prompt("Qual a nota da primeira prova?"))
        let provaNotaUmPeso = Number(prompt("Qual o peso da primeira prova?"))

        let provaNotaDois = Number(prompt("Qual a nota da segunda prova?"))
        let provaNotaDoisPeso = Number(prompt("Qual o peso da segunda prova?"))

        let provaNotaTres = Number(prompt("Qual a nota da terceiro prova?"))
        let provaNotaTresPeso = Number(prompt("Qual o peso da terceiro prova?"))

        let provaNotaQuatro = Number(prompt("Qual a nota da quarta prova?"))
        let provaNotaQuatroPeso = Number(prompt("Qual o peso da quarta prova?"))

        


        let provaNotaUmTotal = provaNotaUm * provaNotaUmPeso
        let provaNotaDoisTotal = provaNotaDois * provaNotaDoisPeso
        let provaNotaTresTotal = provaNotaTres * provaNotaTresPeso
        let provaNotaQuatroTotal = provaNotaQuatro * provaNotaQuatroPeso


        let mediaFinalNaoPonderada = provaNotaUmTotal + provaNotaDoisTotal + provaNotaTresTotal + provaNotaQuatroTotal
        let mediaFinalPonderada = mediaFinalNaoPonderada /(provaNotaUmPeso + provaNotaDoisPeso + provaNotaTresPeso + provaNotaQuatroPeso) 


        setMediaFinal(mediaFinalPonderada.toFixed(2))
        

        
    }








  return (
    <div className='div-container'>

      <h1>PROVA</h1>
      
    <button className='buttonNota' onClick={calcular}>COMEÇAR PROCESSO</button>
    <br /> {mediaFinal}


    </div>
  )
}
