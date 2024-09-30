import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let senhasPreferenciais = []
let senhasNormais = []


let numeroSenha = 1




function App() {


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



        <div className="topo">

        <img className='imge' src="public\FARMARCIALOGOPEQUENA.png" alt="" srcset="" />
        <label className='lbl' htmlFor="">Gerenciamento de finanças</label>
        </div>

        <div className="meio">

          {resultado}




<button className='btn' onClick={atender} >Atender</button>
<button className='btn' onClick={gerarSenha} >Senha normal</button>
<button className='btn' onClick={gerarSenhaPreferencial} >Senha preferêncial</button>



        </div>


        <div className="baixo">

        {filaPreferencial.map((senhasPreferenciais) => (
            <div key={senhasPreferenciais.numero}>

              <p>{senhasPreferenciais.numero}</p>
              <p>{senhasPreferenciais.tipo}</p>

            </div>))





          }



          {filaNormal.map((senhasNormais) => (
            <div key={senhasNormais.numero}>

              <p>{senhasNormais.numero}</p>
              <p>{senhasNormais.tipo}</p>

            </div>



          ))

          }

        </div>

      </div>

    
  )


}













export default App
