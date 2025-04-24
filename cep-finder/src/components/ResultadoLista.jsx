import React from 'react';
import { Card } from 'primereact/card';

function ResultadoLista({ localidades }) {
  return (
    <div>
      <h2>Resultados da Busca</h2>
      {localidades.map((localidade, index) => (
        <Card
          key={index}
          className="mb-2"
          style={{ 
            textAlign: 'center',
            borderRadius: '5px',
            backgroundColor: '#FFFFE0', 
            padding: '5px', 
            marginLeft: '20px', 
            marginTop: '10px', 
            borderColor: 'lightgray', 
            borderStyle: 'solid', 
            borderWidth: '1px' 
        }} 
        >
          <div>CEP: {localidade.cep}</div>
          <div>Logradouro: {localidade.logradouro}</div>
          <div>Bairro: {localidade.bairro}</div>
          <div>Localidade: {localidade.localidade}</div>
          <div>UF: {localidade.uf}</div>
          {localidade.complemento && <div>Complemento: {localidade.complemento}</div>}
          
        </Card>
      ))}
    </div>
  );
}

export default ResultadoLista;