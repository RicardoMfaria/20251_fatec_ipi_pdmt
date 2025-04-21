import React from "react"

class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      latitude: null,
      longitute: null,
      estacao: null,
      data: null,
      icone: null
    }
  }

  obterEstacao = (data, latitude) => {

    const anoAtual = data.getFullTear()

    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Data(anoAtual, 2, 21)

    const estaNoSul = latitude < 0

    if (data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'

  }

  icones = {
    'Primavera' : 'seedling',
    'Verão' : 'clouds-sun',
    'Outono' : 'tree',
    'Inverno' : 'snowflake'
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual, posicao.coords.latitude)
        const icone = this.icones[estacao]

        this.setState({
          latitude: posicao.coords.latitude,
          longitute: posicao.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleTimeString(),
          icone: icone
        })
      },
      (erro) => {

      }
    )
  }


  render(){

    return (
      <div className='container mt-2'>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div 
                  className="d-flex align-items-center border rounded mb-2"
                  style={{height: '6rem'}}>
                    <i className={`fa-solid fa-5x fa-${this.state.icone}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )

  }
  
}

export default App