import react, {useState} from 'react'
import './InputTeste.css'
function InputTeste() {


    const[inputCelcius, setInputCelcius] = useState()
    const[fahrenheit, setFahrenheit] = useState()


    function mudouCelcius(event) {    
        console.log(event)
        setInputCelcius(event.target.value) 
    }



    function converterCparaF() {


        let f = inputCelcius * 1.8 + 32
        setFahrenheit("" + f)
        
        
    }




  return (
    <div className='div-inputs'>
      
      <center>
   
      <input className='lbl' type="text" 
      value={inputCelcius} 
      onChange={mudouCelcius}/>

      <button onClick={converterCparaF} >CONVERTER</button>

      <p>{fahrenheit} </p>

    </center>

    </div>
  )
}

export default InputTeste
