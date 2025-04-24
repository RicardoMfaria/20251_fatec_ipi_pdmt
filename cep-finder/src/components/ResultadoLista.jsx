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
          style={{ borderRadius: '8px' }} // Adicionando estilo inline para borda arredondada
        >
          <div>CEP: {localidade.cep}</div>
          <div>Logradouro: {localidade.logradouro}</div>
          <div>Bairro: {localidade.bairro}</div>
          <div>Localidade: {localidade.localidade}</div>
          <div>UF: {localidade.uf}</div>
          {localidade.complemento && <div>Complemento: {localidade.complemento}</div>}
          {/* Adicione outros campos conforme necessário */}
        </Card>
      ))}
    </div>
  );
}

export default ResultadoLista;