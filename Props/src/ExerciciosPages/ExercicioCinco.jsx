
import { useState } from 'react'
import './ExercicioCinco.css'


function ExercicioCinco() {




const [resultado, setResult] = useState()


    function calcularVerif() {


        let numeroDigitado = Number(prompt("Qual é seu numero?"))


        switch(true){


            case !isNaN(numeroDigitado) && numeroDigitado > 0:
                setResult("O numero é positivo!")
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
    <div className='exercicioCinco-container'>


      <h1>O NUMERO É POSITIVO, NULO OU NEGATIVO?</h1>
        <button onClick={calcularVerif} className='buttonMaiorOuMenor'>CALCULAR</button>
        {resultado}
      
    </div>
  )
}

export default ExercicioCinco
