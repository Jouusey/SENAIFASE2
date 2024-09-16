import { useState } from 'react'
import './ExercicioBlocoEsquerda.css'

function ExercicioBlocoEsquerda() {



  const [resultado, setResultado] = useState()
  const [inputDiasHospedados, setInputDiasHospedados] = useState()
  const [detalhes, setDetalhes] = useState()
  
function diasHospedados(event) {

  setInputDiasHospedados(Number(event.target.value))
  
}

function calcularDias() {

  let precoDaEstadia 
  let valorFinal
  let valorFinalComdesconto


  switch (true) {
    case inputDiasHospedados <= 5:
      precoDaEstadia = 100
      
      break;

            case inputDiasHospedados >= 6 && inputDiasHospedados <= 10:
              precoDaEstadia = 90

            break;

                  case inputDiasHospedados >= 10:
                    precoDaEstadia = 80

                   break;
    default:
      break;
  }

  
  valorFinal = (precoDaEstadia * inputDiasHospedados) 


  let descontoBarista = ((valorFinal / 100) * 10)
  let descontoConvenio = ((valorFinal / 100) * 15)
  let multa = 150

  let valorDesconto = descontoBarista + descontoConvenio


  valorFinalComdesconto = valorFinal - (descontoBarista + descontoConvenio) + multa



  if( isNaN(inputDiasHospedados) || inputDiasHospedados <= 0 || !Number.isInteger(inputDiasHospedados) ){

    setResultado("Numero inválido")

  }else{

    setResultado('O valor final com desconto foi: R$ '+valorFinalComdesconto)

    setDetalhes(` Foi recebido em desconto: 15% de R$${valorFinal}, e 10% de R$${valorFinal}, em total foi dado R$${valorDesconto} de desconto e multado R$ 150`)

  }
    




  
}














  return (
    <div>
      
      <div className="exercicio-esquerda">

          <div className="exercicio-esquerda-Topo">

          <label className='lblDias'>QUANTOS DIAS PLANEJA FICAR?</label>
          
           <input className='inptDias' type="number" 
           value={inputDiasHospedados}
           onChange={diasHospedados} />
          
          </div>

          <div className="exercicio-esquerda-resto">

          <button onClick={calcularDias} className='btnExercicio-Esquerda'>CALCULAR VALOR</button>

          </div>

          <div className="exercicio-esquerda-resultado">

{resultado}

{detalhes}

          </div>

      </div>
        
    </div>
  )
}

export default ExercicioBlocoEsquerda
