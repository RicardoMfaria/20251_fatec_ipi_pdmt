import React, {useState} from "react";
import { inputText } from "react";
import { Button } from "react";

function Busca () {
    const [cep, setCep ] = useState ('')

    const handleChange = (event) => {
        setCep(event.target.value);
    }

    const handleBuscar = () => {
        alert(`CEP digitado: ${cep}`);
    }

    return (
        <div>
            <h2>Buscar por CEP</h2>
            <div className="p-fluid">
                <div className="p-fluid">
                    <label htmlFor="cep">CEP</label>
                    <inputText
                    id="cep"
                    type="text"
                    value={cep}
                    onChange={handleChange}
                    />
                </div>
                <Button label="Buscar" onClicl={handleBuscar}/>
            </div>
        </div>
    );
}

export default Busca;