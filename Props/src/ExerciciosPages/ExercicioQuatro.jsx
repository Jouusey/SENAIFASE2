import { useState } from 'react'
import './ExercicioQuatro.css'






export default function ExercicioQuatro() {



    const [idade, setIdade] = useState()


function calcularExp(){

    


    let idadePresidenteChapaEsquerda = 63
    let idadeVicePresidenteChapaEsquerda = 25
    
    let idadePresidenteChapaDireita = 43
    let idadeVicePresidenteChapaDireita = 10



    let idadeChapaEsquerdaTotal =  idadePresidenteChapaEsquerda + idadeVicePresidenteChapaEsquerda
    
    let idadeChapaDireitaTotal = idadePresidenteChapaDireita + idadeVicePresidenteChapaDireita


    if(idadeChapaEsquerdaTotal > idadeChapaDireitaTotal){


        setIdade("A chapa NS possui a maior experiência")



    }else if(idadeChapaDireitaTotal > idadeChapaEsquerdaTotal){


        setIdade("A chapa SG possui a maior experiêcia")
    }

    
}





  return (




    <div className='chapas-container'>




            <div className='chapasED'>



                <div className='chapaEsquerda-container'>
                    <label className='h1Texto' htmlFor="">CHAPA NS </label> 


                    <label className='h1Texto'> PRESIDENTE: Einrrike Goiaba-63 ANOS</label>
                    <label className='h1Texto'> VICE PRESIDENTE: Falcio-25 ANOS </label>
                   

                    <div className='div-idade'>


                    {idade}

                    </div>







                </div>

                <div className='chapaDireita-container'>
                    
                <label className='h1Texto' htmlFor="">CHAPA SG </label> 




                <label className='h1Texto'> PRESIDENTE: Ruizo Lemão-43</label>
                    <label className='h1Texto'> VICE PRESIDENTE: Gerinbaldio Gomez-10 ANOS </label>
                    <div className='div-idade'>


                    {idade}

                    </div>









                </div>






            </div>



<div className='resultadoDiv'>


    <button onClick={calcularExp} className='buttonChapa'>CALCULAR EXPERIÊNCIA</button>

</div>


    </div>
  )
}

