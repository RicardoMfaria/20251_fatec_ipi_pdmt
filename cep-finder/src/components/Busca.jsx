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
    <div 
        className="flex flex-column" 
        style={{
        textAlign: 'center', 
        backgroundColor: '#F8F8F8', 
        width: '800px', 
        marginTop: '30px',  
        padding: '25px', 
        borderRadius: '10px', 
        borderColor: 'lightgray', 
        borderStyle: 'solid', 
        borderWidth: '1px',
        height: '120px',
         }}> 
      <div className="p-field">
        <label htmlFor="cep">CEP</label>
        <InputText
          id="cep"
          type="text"
          value={cep}
          onChange={handleChange}
          style={{ width: '100%', marginTop: '10px', height: '30px' }}
        />
      </div>
      <Button 
        label="Buscar" 
        onClick={handleBuscar} 
        style={{ 
            marginTop: '10px', 
            width: '100%',
            backgroundColor: '#E8E8E8',
            border: '1px solid black' 
        }} /> 
      
    </div>
  );
}

export default Busca;