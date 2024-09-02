
import './Home.css'
import Titulo from '../components/Titulo'
import Cadastro from './Cadastro'
import Sorteio from './Sorteio'
function Home() {
  return (
    <div className='lago-con'>
      <Titulo texto={"Lagostas"} emoji={"🦞"} />
      <h2 className='Home-style'>Veja quantos crustaceos você pode vender!!</h2>


    </div>
  )
}

export default Home
