import "./Exercicios.css"




import { useState } from "react"


export default function Exercicios() {
    
const [resultado, setResultado] = useState()
const [valorFinal, setValor] = useState()
const [produtoValor, setProdutoValor] = useState()


  

    function calculo(){

    
      let moedaUmCentavoValor = 1
      let moedaCincoCentavoValor = 5
      let moedaDezCentavoValor = 10
      let moedaVintecincoCentavoValor = 25
      let moedaCinquentaCentavoValor = 50
  


     let precoProduto = Number(prompt("Qual o preço do produto?"))

     let moedaUmCentavoValorQuantidade = Number(prompt("Quantas moedas de um centavo você possui?"))
      
     let moedaCincoCentavoValorQuantidade = Number(prompt("Quantas moedas de cinco centavos você possui?"))
     let moedaDezCentavoValorQuantidade = Number(prompt("Quantas moedas de dez centavos você possui?"))
     let moedaVintecincoCentavoValorQuantidade = Number(prompt("Quantas moedas de vintecinco centavos você possui?"))
     let moedaCinquentaCentavoValorQuantidade = Number(prompt("Quantas moedas de cinquenta centavos você possui?"))


     let  moedaUmCentavoValorTotal = moedaUmCentavoValor * moedaUmCentavoValorQuantidade
     let  moedaCincoCentavoValorTotal = moedaCincoCentavoValor * moedaCincoCentavoValorQuantidade
     let  moedaDezCentavoValorTotal = moedaDezCentavoValor * moedaDezCentavoValorQuantidade
     let  moedaVintecincoCentavoValorTotal = moedaVintecincoCentavoValor * moedaVintecincoCentavoValorQuantidade
     let moedaCinquentaCentavoValorTotal = moedaCinquentaCentavoValor * moedaCinquentaCentavoValorQuantidade


      let somaMoedas = (moedaUmCentavoValorTotal + moedaCincoCentavoValorTotal + moedaDezCentavoValorTotal + moedaVintecincoCentavoValorTotal + moedaCinquentaCentavoValorTotal) / 100
      

      setProdutoValor(` PREÇO DO PRODUTO: R$ ${precoProduto} `)
      setValor(` TOTAL: R$ ${somaMoedas} `)


        if(somaMoedas < precoProduto){

            setResultado("NÃO PODE COMPRAR")

        }else if(somaMoedas >= precoProduto){
        
            setResultado("PODE COMPRAR")
        }

    }





  return (
    <div className="exercicios-container">
      
      <center>
      <h1>PORQUINHO</h1>


      
        <button onClick={calculo}>COMEÇAR PROCESSO</button>
      <br /><br />

      <label htmlFor="">{produtoValor}</label>
      <br />
      
      <label htmlFor="">{resultado}</label>
      <br />

      {valorFinal}
      
      </center>
    </div>

  )
}
