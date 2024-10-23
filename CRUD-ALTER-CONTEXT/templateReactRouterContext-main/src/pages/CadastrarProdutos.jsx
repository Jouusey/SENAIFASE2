import React, { useState, useContext, useEffect } from 'react'
import Navbar from "../components/Navbar"
import { GlobalContext } from "../contexts/GlobalContext"
import "./CadastroProdutos.css"

function CadastrarProdutos() {
     const {produtos, setProdutos} = useContext(GlobalContext)

    const [inputNome, setInputNome] = useState('')
    const [inputPreco, setInputPreco] = useState('')

    useEffect(() => {

        console.table(produtos)

    },[produtos])


    function cadastrarProduto() {

        let produto = {

            id: Date.now(),
            nome: inputNome,
            preco: inputPreco
        }
        setProdutos([...produtos, produto])

        
        
    }

  return (
    
    <div>
        
        <Navbar />

        <h1>Cadastre o produto :)</h1>

        <div className="input-container">


            <label htmlFor="">Nome:</label>
            <input type="text"
             value={inputNome}
             onChange={(event) => setInputNome(event.target.value) }

             />
             
            <label htmlFor="">Preço:</label>
            <input type="text"
             value={inputPreco}
             onChange={(event) => setInputPreco(event.target.value) }

             />
        </div>

        <button onClick={cadastrarProduto} >Cadastrar</button>

        <div className='produtos' > 
            
        {produtos.map((p) => (

            <div className='produto-container' key={p.id}> 
                <p>{p.nome}</p>
                <p>{p.preco}</p>
                <p>{p.id}</p>
            </div>
        ))}
        
        </div>
    </div>
  )
}

export default CadastrarProdutos
