import React, { useState } from 'react'


export default function valorDeVendacomLucros() {


  const[valorItem, setValorItem] = useState()
  
  const[resultado,setResultado] = useState()

  let lucroMenosDeVinte = 45
  let lucroMaisDeVinte = 30
  let valorDeVendacomLucro

  function calcularvalorDeVendacomLucro() {

    switch (true){
  
      case valorItem < 20:
      valorDeVendacomLucro = ((valorItem / 100) * lucroMenosDeVinte) + valorItem
      setResultado(`Para garantir um lucro de 45%, o produto deverá ser vendido por R$ ${(valorDeVendacomLucro).toFixed(2)}`)
      break;

        case valorItem >= 20:
          valorDeVendacomLucro = ((valorItem / 100) * lucroMaisDeVinte) + valorItem
          setResultado(`Para garantir um lucro de 30%, o produto deverá ser vendido por R$ ${(valorDeVendacomLucro).toFixed(2)}`)
          break;







    }
  



  }
  




function valorItemMudar(event) {
  setValorItem(Number(event.target.value))
}





  return (

    <div>
 
   <h1>EXERCICIO 5.23</h1>

   <label> Por quanto comprou o produto?</label> 
   
   <input type="text" value={valorItem} onChange={valorItemMudar} />

  
   <button onClick={calcularvalorDeVendacomLucro}>CALCULAR</button>


   {resultado}

          
      
    </div>
  )
}
