import { useState } from 'react'
import './ExercicioTres.css'

function ExercicioTres() {

    const [tempFinal, setTemp] = useState()

    let TempFahrenheit = 0
    let tempCelcius = 0

    function celciusparafahrenheit() {


        tempCelcius = Number(prompt("Qual a temperatura, em CELCIUS?"))

        if(!isNaN(tempCelcius)){
            

            TempFahrenheit = (tempCelcius * 1.8) + 32
    
            
            setTemp(`TEMPERATURA EM FAHRENHEIT: ${(TempFahrenheit).toFixed(0)} TEMPERATURA EM CELCIUS: ${(tempCelcius).toFixed(0)}`)
    


        }else {


            setTemp(`EI, BOTÁ UM NUMERO VALIDO AI.`)
        }
        
     
        
    }




    function fahrenheitparacelcius() {



           
        TempFahrenheit = Number(prompt("Qual a temperatura, em FAHRENHEIT?"))


        
        if(!isNaN(TempFahrenheit)){
            


        tempCelcius = (TempFahrenheit - 32) * (5/9)

        
        setTemp(`TEMPERATURA EM CELCIUS: ${(tempCelcius).toFixed(0)} TEMPERATURA EM FAHRENHEIT: ${(TempFahrenheit).toFixed(0)}`)
        

        
    }else{


        setTemp(`EI, BOTÁ UM NUMERO VALIDO AI.`)
        
    }
    
    }













  return (


    <div className='temp-container'>
        <h1>TEMPERATURA</h1>
      <button className='buttonTemp' onClick={celciusparafahrenheit}>CELCIUS PARA FAHRENHEIT</button> 
      <button className='buttonTemp' onClick={fahrenheitparacelcius}>FAHRENHEIT PARA CELCIUS</button>

      


<div className='show-container'>
{tempFinal}
</div>
    </div>
  )
}

export default ExercicioTres
