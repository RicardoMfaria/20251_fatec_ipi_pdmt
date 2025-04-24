import React, {useState} from "react";
import { InputText } from "primereact/inputText";
import { Button } from "primereact/Button";
import axios from 'axios';

function Busca (props) {
    const [cep, setCep ] = useState ('')

    const handleChange = (event) => {
        setCep(event.target.value);
        }

        const handleBuscar = () => {
            if(!cep) {
            alert("Por favor digite um CEP");
            return
            }

            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
            props.onResultado(response.data)
            })
            .catch(error => {
            if(error.response && error.response.status === 400) {
                alert('CEP inválido')
            } else
            alert('Erro ao buscar o cep')
            console.log("erro na requisição", error)
            
        })
    }

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
                <Button label="Buscar" onClick={handleBuscar}/>
            </div>
        </div>
    );
}

export default Busca;