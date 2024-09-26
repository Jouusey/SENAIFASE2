import React, { useState } from 'react'
import './AtividadeUm.css'


let contador = 0
let populacaoTotal = 0
let homensTotal  = 0
let mulheresTotal = 0

let alturaTotal = 0
let alturaMedia = 0

let alturaTotalHomens = 0
let alturaTotalMulheres = 0

let alturaMediaHomens = 0
let alturaMediaMulheres = 0


let alturaVector = []


let maiorAltura = 0
let menorAltura = 99999999

let porcentagemDeHomens
  


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
            
           
          case genero == "Homem":
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
          
  
        } else if(alturaVector[i] < menorAltura){
  
          menorAltura = Number(alturaVector[i])
  
        }
          }
  
  
  
    
          alturaMedia = Number(alturaTotal / 10).toFixed(2)
  
          alturaMediaMulheres = Number(alturaTotalMulheres / mulheresTotal).toFixed(2)
  
  
          alturaMediaHomens = Number(alturaTotalHomens / homensTotal).toFixed(2)
  
  
          populacaoTotal = Number(homensTotal + mulheresTotal).toFixed(2)
  
          porcentagemDeHomens = (homensTotal / populacaoTotal) * 100
      
  
    
          setResultados('Porcentagem de homens: ' + porcentagemDeHomens + '%'+ 'A maior altura: ' + maiorAltura + ' A menor altura: ' + menorAltura + ' Altura média de todos: ' + alturaMedia + ' Altura média das mulheres: ' + alturaMediaMulheres)
  
  
  
    
    







      }

  
    

  }








  return (
   
    <div className="atividade-container">



<h1>EXERCICIO 1:</h1>





<label className='lbl' >Qual seu gênero? ("Homem" ou "Mulher")</label>
<input value={genero} onChange={mudarGenero} type="text" />

<label className='lbl' >Qual sua altura?</label>
<input value={altura}  onChange={mudarAltura} type="number" />

<button onClick={adicionarDados} className='btn'>Enviar</button>

{resultados}

    </div>
  )
}

export default AtividadeUm
