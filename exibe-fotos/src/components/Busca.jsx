import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

  render() {
    return (
      <div
        className='flex flex-column'>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search'></InputIcon>
                <InputText placeholde="Buscar algo..."/>
            </IconField>
      </div>
    )
  }
}

export default Busca