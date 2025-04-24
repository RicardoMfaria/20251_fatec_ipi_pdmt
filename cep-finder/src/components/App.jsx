import React, { useState } from 'react';
import Busca from './Busca';
import ResultadoLista from './ResultadoLista'; // Vamos criar este componente

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
    <div className="flex"> {/* Container principal com layout flexível */}
      <div style={{ width: '50%', paddingLeft: '20px' }}> {/* Área para o componente Busca */}
        <Busca onResultado={handleResultadoBusca} />
      </div>
      <div className="flex-grow" style={{ marginTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}> {/* Área para a lista de cards */}
        
        <ResultadoLista localidades={localidadesEncontradas} />
      </div>
      {/* Uma terceira div poderia ser adicionada aqui para outros elementos, se necessário */}
    </div>
  );
}

export default App;