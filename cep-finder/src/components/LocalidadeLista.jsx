import React from "react";
import { DataTable} from 'primereact/DataTable'
import { Column } from "primereact/column";

function LocalidadeLista () {
    const localidades = [
        {cep: '01001-000', logradouro: 'Praça da Sé', bairro: 'Sé', localidade: 'São Paulo', uf: 'SP'}
        {cep: '01001-000', logradouro: 'Praça da Sé', bairro: 'Sé', localidade: 'São Paulo', uf: 'SP'}
        {cep: '01001-000', logradouro: 'Praça da Sé', bairro: 'Sé', localidade: 'São Paulo', uf: 'SP'}
    ]

    return(
        <div>
            <h2>Exemplos de localidades</h2>
            <DataTable value={localidades}>
            <Column field="cep" header="CEP"/>
            <Column field="logradouro" header="Logradouro"/>
            <Column field="bairro" header="Bairro"/>
            <Column field="localidade" header="Localidade"/>
            <Column field="uf" header="UF"/>
            </DataTable>
        </div>
    )
}

export default LocalidadeLista