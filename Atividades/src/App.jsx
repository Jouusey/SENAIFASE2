import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AtividadeUm from './assets/components/AtividadeUm'
import AtividadeDois from './assets/components/AtividadeDois'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <AtividadeUm />
      <AtividadeDois />

  



    </>
  )
}

export default App
