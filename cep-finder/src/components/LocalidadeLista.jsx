import React from "react";
import { DataTable} from 'primereact/DataTable'
import { Column } from "primereact/column";

function LocalidadeLista () {
    const localidades = [
        {cep: '30130-010', logradouro: 'Avenida Amazonas', bairro: 'Centro', localidade: 'elo Horizonte', uf: 'MG'},
        {cep: '04094-050', logradouro: 'Rua das Rosas', bairro: 'Mirandópolis', localidade: 'São Paulo', uf: 'SP'},
        {cep: '13010-111', logradouro: 'Rua Barão de Jaguara', bairro: 'Centro', localidade: 'Campinas', uf: 'SP'}
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