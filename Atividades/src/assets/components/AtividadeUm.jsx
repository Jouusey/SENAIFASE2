import React, { useState } from 'react'
import './AtividadeUm.css'


let contador = 0
let homensTotal  = 0
let mulheresTotal = 0

let alturaTotal = 0
let alturaMedia = 0

let alturaTotalHomens = 0
let alturaTotalMulheres = 0

let alturaMediaHomems = 0
let alturaMediaMulheres = 0


let alturaVector = []


let maiorAltura = 0
let menorAltura = 99999999
  


function AtividadeUm() {



 
  const [altura, setAltura] = useState()
  const [genero, setGenero] = useState()
  const [resultados, setResultados] = useState()

  let contadorSuper = 0


  function mudarAltura(event){
    
    setAltura(event.target.value)

  }

  function mudarGenero(event){

    setGenero(event.target.value)

  }



  function adicionarDados() {




      alturaVector.push(altura)

      switch(true){
  
        case genero == "Mulher":
        alturaTotalMulheres = alturaTotalMulheres + Number(altura)
        mulheresTotal++
        
        break;
          
         
        case genero == "Homen":
        alturaTotalHomens = alturaTotalHomens + Number(altura)
        homensTotal++
  
        break;
      }
  
  
      contador++
      console.log(contador)

  
      if(contador == 10){
  
        
  
        for (let index = 0; index < 10; index++) {
  
          alturaTotal = alturaTotal + Number(alturaVector[index])
         
        }

        

        

        for (let i = 0; i < 10; i++) {
        
      if( alturaVector[i] > maiorAltura ){


        maiorAltura = Number(alturaVector[i])




      }
        }



  
        alturaMedia = alturaTotal / 10

        alturaMediaMulheres = alturaTotalMulheres / mulheresTotal


        alturaMediaHomems = alturaTotalHomens / homensTotal

    
  
      alert("Mulheres totais: " + mulheresTotal)
      alert('Homens totais:' + homensTotal)
      alert('-Altura total das Mulheres: ' + alturaTotalMulheres + '-Altura total dos Homens: ' + alturaTotalHomens)
      alert('Altura média de todos: ' + alturaMedia)
      alert('Altura média das mulheres: ' + alturaMediaMulheres + '-Altura média dos homens: ' + alturaMediaHomems)
      alert('A maoir altura: ' + maiorAltura)
      }
  
  
  
  
  
    

  }








  return (
   
    <div className="atividade-container">



<h1>EXERCICIO 1:</h1>





<label className='lbl' >Qual seu gênero?</label>
<input value={genero} onChange={mudarGenero} type="text" />

<label className='lbl' >Qual sua altura?</label>
<input value={altura}  onChange={mudarAltura} type="number" />

<button onClick={adicionarDados} className='btn'>Enviar</button>

{resultados}

    </div>
  )
}

export default AtividadeUm
