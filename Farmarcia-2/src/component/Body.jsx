import { useState } from 'react'
import './Body.css'


let senhasPreferenciais = []
let senhasNormais = []


let numeroSenha = 1




function Body() {


  const [filaPreferencial, setFilaPreferencial] = useState([])
  const [filaNormal, setFilaNormal] = useState([])
  const [resultado, setResultado] = useState()




  function gerarSenha() {

    let senhasNormais = {

      numero: numeroSenha++,
      tipo: "normal",
    }

    setFilaNormal([...filaNormal, senhasNormais])


      
    setResultado("")
  }


  function gerarSenhaPreferencial() {

    let senhasPreferenciais = {

      numero: numeroSenha++,
      tipo: "preferencial",
    }

    setFilaPreferencial([...filaPreferencial, senhasPreferenciais])

      
    setResultado("")
  }




  function atender() {



    if (filaPreferencial.length) {


      setFilaPreferencial(filaPreferencial.slice(1))


    } else if (filaNormal.length) {

      setFilaNormal(filaNormal.slice(1))

    } else {

      setResultado("TEM NINGUEM, VÁI DORMIR.")

    }




  }




  return (


  


      <div className="app-container">


        <div className="meio">

          {resultado}




<button className='btn' onClick={atender} >Atender</button>
<button className='btn' onClick={gerarSenha} >Senha normal</button>
<button className='btn' onClick={gerarSenhaPreferencial} >Senha preferêncial</button>



        </div>


        <div className="baixo">


            <div className="filasenhapre">


            {filaPreferencial.map((senhasPreferenciais) => (
            <div key={senhasPreferenciais.numero}>

              <p>{senhasPreferenciais.numero}</p>
              <p>{senhasPreferenciais.tipo}</p>

            </div>))
          }
                
            </div>

                <div className="filasenhanormie">

                {filaNormal.map((senhasNormais) => (
            <div key={senhasNormais.numero}>

              <p>{senhasNormais.numero}</p>
              <p>{senhasNormais.tipo}</p>

            </div>



          ))

          }

                </div>






        </div>

      </div>

    
  )


}













export default Body
