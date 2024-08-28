import Titulo from "../components/Titulo"


function Sortear(){

    let numeroAleatorio = Math.floor(Math.random() * 10)
    
    alert(`VENDEU ${numeroAleatorio}`)
    
}

export default function Sorteio(props) {
  return (
    <div className="Sorteio-container">

     
        

<h1> {props.texto}
</h1>

        <button onClick={Sortear} className="btn" >Sorteio</button>
    
    </div>
  )
}
