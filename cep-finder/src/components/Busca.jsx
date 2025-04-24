import React, { useState } from "react";
import { InputText } from "primereact/inputText";
import { Button } from "primereact/Button";
import axios from 'axios';

function Busca (props) {
  const [cep, setCep ] = useState ('');

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const handleBuscar = () => {
    if(!cep) {
      alert("Por favor digite um CEP");
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        props.onResultado(response.data);
      })
      .catch(error => {
        if(error.response && error.response.status === 400) {
          alert('CEP inválido');
        } else {
          alert('Erro ao buscar o cep');
          console.log("erro na requisição", error);
        }
      });
  };

  return (
    <div className="flex flex-column" style={{ width: '100%' }}> {/* Layout vertical para input e botão */}
      <div className="p-field">
        <label htmlFor="cep">CEP</label>
        <InputText
          id="cep"
          type="text"
          value={cep}
          onChange={handleChange}
          style={{ width: '100%' }} // O input ocupa a largura da div pai
        />
      </div>
      <Button label="Buscar" onClick={handleBuscar} style={{ width: '100%' }} /> {/* O botão ocupa a largura da div pai */}
    </div>
  );
}

export default Busca;