import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Busca() {
  const [cep, setCep] = useState('');

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const handleBuscar = () => {
    alert(`CEP digitado: ${cep}`);
  };

  return (
    <div>
      <h2>Buscar por CEP</h2>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="cep">CEP</label>
          <InputText
            id="cep"
            type="text"
            value={cep}
            onChange={handleChange}
          />
        </div>
        <Button label="Buscar" onClick={handleBuscar} />
      </div>
    </div>
  );
}

export default Busca;