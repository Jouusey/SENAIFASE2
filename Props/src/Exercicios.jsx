import "./Exercicios.css"




import { useState } from "react"




export default function Exercicios() {
    
const [resultado, setResultado] = useState()


    let moedaUmCentavo = 0
    let moedaCincoCentavo = 0
    let moedaDezCentavo = 0
    let moedaVintecincoCentavo = 0
    let moedaCinquentaCentavo = 10000

    let somaMoedas = (moedaUmCentavo + moedaCincoCentavo + moedaDezCentavo + moedaVintecincoCentavo + moedaCinquentaCentavo) / 100
    let precoProduto = 100
   


    function calculo(){

        if(somaMoedas < precoProduto){
       
            
            setResultado("NÃO PODE COMPRAR")

        }else if(somaMoedas >= precoProduto){
        
            setResultado("PODE COMPRAR")
        }

    }





  return (
    <div className="exercicios-container">
      
      <h1>EXERCICIO 1</h1>


      <label htmlFor="">QUANTIDADE DE MOEDAS DE 1 CENTAVO &nbsp;</label> <input type="number" />
      <br />
      <label htmlFor="">QUANTIDADE DE MOEDAS DE 5 CENTAVO &nbsp;</label> <input type="number" />
      <br />
      <label htmlFor="">QUANTIDADE DE MOEDAS DE 10 CENTAVO</label> <input type="number" />
      <br />
      <label htmlFor="">QUANTIDADE DE MOEDAS DE 25 CENTAVO</label> <input type="number" />
      <br />
      <label htmlFor="">QUANTIDADE DE MOEDAS DE 50 CENTAVO</label> <input type="number" />
      <br /><br /><br />
      <label htmlFor="">PREÇO DO PRODUTO</label> <input type="number" /> 
      <button onClick={calculo}>CALCULAR</button>
      <br /><br />
      {resultado}
      
    </div>

  )
}
