import React, { useState } from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'

function App() {

  const[localidadesEncontradas, setLocalidadesEncontradas] = useState([])

  const handleResultadoBusca = (data) => {
    console.log(data)
    if(!data.erro) {
      setLocalidadesEncontradas([data])
    } else {
      alert('CEP não encontrado')
    }
  }

  return (
    <div>
      <Busca onResultado={handleResultadoBusca}/>
      <LocalidadeLista/>
    </div>
  )
}

export default App
