import React from "react"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      latitude: null,
      longitute: null,
      estacao: null,
      data: null,
      icona: null
    }
  }

  render(){

    return (
      <div>Meu App</div>


    )

  }
  
}

export default App