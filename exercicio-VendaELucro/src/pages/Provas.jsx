import React, { useState } from 'react'
import './Provas.css'

function Provas() {





    let provas=[]
    let mediaProvas = 0

    const [provaInput, setProvaInput] = useState()
    const [provaInputDois, setProvaInputDois] = useState()
    const [resultado, setResultado] = useState()


    function  addNotas() {

        if( !isNaN(provaInput) && !isNaN(provaInputDois) && provas.length < 2 && provaInput <= 10 && provaInputDois <= 10 && provaInput >= 0 && provaInputDois >= 0){


            mediaProvas = (provaInput + provaInputDois) / 2

            provas.push(provaInput, provaInputDois)

            console.table(provas)

            switch (true){


               case provas[0] > 9 && provas[0] <= 10:
                provas[0] = "A"
                break;

                    case provas[0] > 7.5 && provas[0] <= 9:
                        provas[0] = "B"
                        break;
                        
                            case provas[0] > 6 && provas[0] <= 7.5:
                                provas[0] = "C"
                               break;    
                                
                                    case provas[0] > 4 && provas[0] <= 6:
                                        provas[0] = "D"
                                        break;
                                            
                                            case provas[0] >= 0 && provas[0] <= 4:
                                                provas[0] = "E"
                                                break;

            }


            switch (true){


                case provas[1] > 9 && provas[1] <= 10:
                 provas[1] = "A"
                 break;
 
                     case provas[1] > 7.5 && provas[1] <= 9:
                         provas[1] = "B"
                         break;
                         
                             case provas[1] > 6 && provas[1] <= 7.5:
                                 provas[1] = "C"
                                break;    
                                 

                                     case provas[1] > 4 && provas[1] <= 6:
                                         provas[1] = "D"
                                         break;
                                             
                                             case provas[1] >= 0 && provas[1] <= 4:
                                                 provas[1] = "E"
                                                 alert("afffffffffffffs")
                                                 break;
 
             }
 


        



        } 

        if(provas.length == 2){


            setResultado(`A média é: ${mediaProvas}, A primeira nota fou um ${provas[0]} e a segunda nota foi um ${provas[1]}`)

        }



       
    }
    







    function inputNotaMudar(event) {
        setProvaInput(event.target.value)}

    
    function inputNotaMudarDois(event) {
        setProvaInputDois(event.target.value)}





  return (
    <div  className='conversaoDeNotas-Container'>







            <div className="inputsNotas-container">


                                                                     <div className="palavras-container">

                                                            <label className='titulo'>CONVERSÃO DE NOTAS</label>

                                                            <label className='diretriz' htmlFor="">Adicione as notas</label>

                                                            </div>


                                            <div className="inputNotas">

                                            <input className='inpt' value={provaInput} type="number" onChange={inputNotaMudar}/>   <input className='inpt' value={provaInputDois} type="number" onChange={inputNotaMudarDois}/>

                                            </div>



           </div>
                


            <div className="notasBoletim">
                
                
            <button className='btn' onClick={addNotas} >ADICIONAR NOTAS</button>


<div className="estiloResult">

{resultado}

</div>

            </div>








    </div>
  )
}

export default Provas
