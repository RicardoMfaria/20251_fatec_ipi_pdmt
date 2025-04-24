import React, { useEffect, useState } from "react";
import { DataTable} from 'primereact/DataTable'
import { Column } from "primereact/column";

function LocalidadeLista ({localidades}) {
    const [renderKey, setRenderKey] = useState(0)

    useEffect(()=>{
        setRenderKey(prevKey => prevKey + 1)
    }, [localidades])

    return(
        <div>
            <h2>Localidades encontradas</h2>
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