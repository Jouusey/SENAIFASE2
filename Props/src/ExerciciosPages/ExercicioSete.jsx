import { useState } from 'react'
import './ExercicioSete.css'

function ExercicioSete() {


    const [resultado, setResult] = useState()


    function calculoPrestacao() {


        let valorSalario = Number(prompt("Qual o valor de seu salario?"))



         if( isNaN(valorSalario) || valorSalario == ""){


            setResult(`ERRO, NUMERO INVALIDO`)
            
        }else{


       




        let valorEmprestimo = Number(prompt("Qual o valor do empréstimo?"))
        let numeroPrestacao = Number(prompt("Em quantas vezes gostaria de fazer essa prestação?"))




        let valorCadaPrestacao = valorEmprestimo / numeroPrestacao

        let valorSalarioTrintaPorcento = (valorSalario / 100) * 30



        if( valorSalarioTrintaPorcento < valorCadaPrestacao){


            setResult(`Infelizmente, você não é capaz de financiar este empréstimo. cobrança do uso do serviço chegara em 2-4 dias de trabalho.
            valor cada prestação: R$ ${(valorCadaPrestacao).toFixed(2)}
            valor salario: R$ ${(valorSalario).toFixed(2)}
            valor empréstimo: R$ ${(valorEmprestimo).toFixed(2)}
            Trinta porcento do salário: R$ ${(valorSalarioTrintaPorcento).toFixed(2)}`)

        }else if( valorSalarioTrintaPorcento > valorCadaPrestacao){

            setResult(`Felizmente, você é capaz de financiar este empréstimo. cobrança do uso do serviço chegara em 2-4 dias de trabalho.
            valor cada prestação: R$ ${(valorCadaPrestacao).toFixed(2)}
            valor salario: R$ ${(valorSalario).toFixed(2)}
            valor empréstimo: R$ ${(valorEmprestimo).toFixed(2)}
            Trinta porcento do salário: R$ ${(valorSalarioTrintaPorcento).toFixed(2)}`)
            
        }
        
    }
        
    }







  return (
    <div className='exercicioSete-container'>
      <h1>PRESTAÇÔES</h1>
      <button onClick={calculoPrestacao} >COMEÇAR PROCESSO</button>
      {resultado}
    </div>
  )
}

export default ExercicioSete
