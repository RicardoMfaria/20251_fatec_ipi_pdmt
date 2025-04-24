import React, { useState } from 'react'
import Busca from './Busca'
import LocalidadeLista from './LocalidadeLista'

function App() {

  const[localidadesEncontradas, setLocalidadesEncontradas] = useState([])

  const handleResultadoBusca = (data) => {
    console.log(data)
    if(!data.erro) {
      setLocalidadesEncontradas(prevLocalidades => [data, ...prevLocalidades]);
    } else {
      alert('CEP não encontrado')
    }
  }

  return (
    <div>
      <Busca onResultado={handleResultadoBusca}/>
      <LocalidadeLista localidades={localidadesEncontradas}/>
    </div>
  )
}

export default App
