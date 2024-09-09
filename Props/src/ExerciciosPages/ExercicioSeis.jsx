import { useState } from 'react'
import './ExercicioSeis.css'

function ExercicioSeis() {



    const [resultado,setResult] = useState()

    function calcularParEPositivo() {



        let numeroDigitado = Number(prompt("Qual seu numero?"))


        switch(true){

            case !isNaN(numeroDigitado) && numeroDigitado > 0 && numeroDigitado % 2 == 0:
                setResult("O numero é par e positivo!")
                break;

            case !isNaN(numeroDigitado) && numeroDigitado > 0:
                setResult("O numero é positivo!")
                break;


                case !isNaN(numeroDigitado) && numeroDigitado < 0 && numeroDigitado % 2 == 0:
                    setResult("O numero é negativo e par!")
                    break;

                case !isNaN(numeroDigitado) && numeroDigitado < 0:
                    setResult("O numero é negativo!")
                    break;

                    case numeroDigitado == (""):
                        setResult("O numero é NULL!")
                        break;

                        case isNaN(numeroDigitado):
                            setResult("Digita um numero valido! e sem letras!")


        }
        
    }















  return (
    <div className='exercicioSeis-container'>
     
     <h1>O NUMERO É POSITIVO E PAR?</h1>
     <button onClick={calcularParEPositivo} >REVELAR</button>
     {resultado}
    </div>
  )
}

export default ExercicioSeis
