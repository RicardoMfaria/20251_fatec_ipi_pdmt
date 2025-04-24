import React, { useState } from 'react';
import Busca from './Busca';
import ResultadoLista from './ResultadoLista'; // Vamos criar este componente
import GraficoUF from './GraficoUF';

function App() {
  const [localidadesEncontradas, setLocalidadesEncontradas] = useState([]);

  const handleResultadoBusca = (data) => {
    console.log(data);
    if (!data.erro) {
      setLocalidadesEncontradas(prevLocalidades => [data, ...prevLocalidades]);
    } else {
      alert('CEP não encontrado');
    }
  };

  return (
    <div className="flex" style={{ minHeight: '100vh' }}> 
      <div 
      style={{ 
        textAlign: 'center', 
        width: '50%', 
        paddingLeft: '25px' 
        }}> 
        <Busca onResultado={handleResultadoBusca} />
      </div>
      <div 
        className="flex-grow" 
        style={{
          textAlign: 'center', 
          marginTop: '20px', 
          paddingLeft: '20px', 
          paddingRight: '20px' 
        }}> 
        
        <ResultadoLista localidades={localidadesEncontradas} />
      </div>
      <div style={{
          position: 'flex',
          top: '10px',
          right: '30px',
          zIndex: 10,
          backgroundColor: 'white', 
          borderRadius: '8px',
          padding: '10px',
          width: '800px',
          height: '500px', 
          textAlign: 'center'}}>
        <GraficoUF localidades={localidadesEncontradas} />
      </div>
      
    </div>
  );
}

export default App;