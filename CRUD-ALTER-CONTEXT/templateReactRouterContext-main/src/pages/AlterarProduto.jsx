import React, { useState } from 'react'
import Navbar from "../components/Navbar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function AlterarProduto() {

    const {produtoSurpresa, setProdutoSurpresa} = useContext(GlobalContext)
    const [inputProduto, setInputProduto] = useState ('')



  return (
    <div>
         <Navbar />
        <h1>Alteração surpresa</h1>
        <p>Produto atual: {produtoSurpresa}</p>

        <div className='input-container'>
            <label htmlFor="">Produto Novo:</label>
            <input  type="text" 

                value={inputProduto}
                onChange={(event) => setInputProduto(event.target.value)}

               />
               
        </div>

        <button onClick={() => setProdutoSurpresa(inputProduto)} >Alterar</button>

    </div>

    
  )
}

export default AlterarProduto
