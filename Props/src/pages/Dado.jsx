
import { useState } from "react"
import Titulo from "../components/Titulo";
import './Dado.css' 


 import { BsDice1 } from "react-icons/bs";
 import { BsDice2 } from "react-icons/bs";
 import { BsDice3 } from "react-icons/bs";
 import { BsDice4 } from "react-icons/bs";
 import { BsDice5 } from "react-icons/bs";
 import { BsDice6 } from "react-icons/bs";


export default function Dado() {


const [resultado, setResultado] = useState()
const [numeroDado, setDado] = useState()


    function sortear(){

        
        let numeroDado = Math.floor(Math.random() * 6 + 1)

        setDado(numeroDado [numeroDado])


        if(numeroDado == 1){
            setDado(<BsDice1 />) 

            setResultado("")
        }
        else if(numeroDado == 2){
            setDado(<BsDice2 />) 

            setResultado("")
        }
        else if(numeroDado == 3){
            setDado(<BsDice3 />) 

            setResultado("")
        }
        else if(numeroDado == 4){
            setDado(<BsDice4 />) 

            setResultado("")
        }
        else if(numeroDado == 5){
            setDado(<BsDice5 />) 

            setResultado("")

        }
        else if(numeroDado == 6){
            setDado(<BsDice6 />) 
            
        setResultado("PARABENS!")
           
        }
 
        
    }






  return (
    <div className="dado-container">

        
        
        <Titulo texto={"ROLE O DADO!"} emoji={"🎲"} />

        <button className="button" onClick={sortear}> ROLAR DADO</button>
      
        <div className="RESULTADO">
            {resultado}
        </div>
        <div className="icones">
            {numeroDado}
        </div>
    </div>
  )
}
