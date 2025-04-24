import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function LocalidadeLista() {
  const localidades = [
    { cep: '01001-000', logradouro: 'Praça da Sé', bairro: 'Sé', localidade: 'São Paulo', uf: 'SP' },
    { cep: '01001-001', logradouro: 'Praça da Sé - lado ímpar', bairro: 'Sé', localidade: 'São Paulo', uf: 'SP' },
    { cep: '01001-002', logradouro: 'Praça da Sé - lado par', bairro: 'Sé', localidade: 'São Paulo', uf: 'SP' }
    // Adicione mais localidades fictícias conforme o protótipo
  ];

  return (
    <div>
      <h2>Localidades Fictícias</h2>
      <DataTable value={localidades}>
        <Column field="cep" header="CEP" />
        <Column field="logradouro" header="Logradouro" />
        <Column field="bairro" header="Bairro" />
        <Column field="localidade" header="Localidade" />
        <Column field="uf" header="UF" />
      </DataTable>
    </div>
  );
}

export default LocalidadeLista;