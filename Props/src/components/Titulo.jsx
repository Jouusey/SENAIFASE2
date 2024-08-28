import './Titulo.css'

function Titulo(props) {
  return (
    <div className='Titulo-Container'>
      <h1>
    {props.texto} {props.emoji}
      </h1>
    </div>
  )
}

export default Titulo
