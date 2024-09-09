import react, {useState} from 'react'

function InputTeste() {


    function mudouCelcius(event) {     
    }



    const[inputCelcius, setInputCelcius] = useState()




  return (
    <div>
      
      <center>
   
      <input className='lbl' type="text" 
      value={inputCelcius} 
      onChange={mudouCelcius}/>

      <button>CONVERTER</button>

    </center>

    </div>
  )
}

export default InputTeste
