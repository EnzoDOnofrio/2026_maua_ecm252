import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)

  const obterEstacao = (dataAtual, latitude) => {
    const d1 = new Date(dataAtual.getFullYear(), 5, 21)
    const d2 = new Date(dataAtual.getFullYear(), 8, 24)
    const d3 = new Date(dataAtual.getFullYear(), 11, 22)
    const d4 = new Date(dataAtual.getFullYear(), 2, 21)

    const estaNoSul = latitude < 0
    if (dataAtual >= d1 && dataAtual < d2)
      return estaNoSul ? 'Inverno' : 'Verão'

    if (dataAtual >= d2 && dataAtual < d3)
      return estaNoSul ? 'Primavera' : 'Outono'

    if (dataAtual >= d3 || dataAtual < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'

  }

  const icones = {
    'Primavera': 'fa-leaf fa-2x',
    'Verão': 'fa-sun fa-2x',
    'Outono': 'fa-solid fa-clover fa-2x',
    'Inverno': 'fa-snowflake fa-2x'
  }

  const obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        //chamar a função obter estação para obter a estação climática do usuário
        //obter ícone apropriado
        //atualizar estado
        //ajustar a jsx para que por enquanto, somente o nome da estação apareça

        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const estacao = obterEstacao(dataAtual, latitude)
        const data = dataAtual
        const icone = icones[estacao]

        setLatitude(latitude)
        setLongitude(longitude)
        setData(data)
        setEstacao(estacao)
        setIcone(icone)
      },
      (error) => {
        setMensagemDeErro('É preciso liberar a localização para ver a estação.')
        console.log(`Erro: ${error.toString()}`)
      })
  }

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="row col-12 text-center">
                <p>
                  {
                    latitude ?
                      'Veja a estação'
                      :
                      mensagemDeErro ?
                        mensagemDeErro
                        :
                        'Clique no botão para saber sua estação climática'
                  }
                </p>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <button className="btn btn-primary" onClick={() => obterLocalizacao()}>
                    Mostrar Estacao
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h4>Estacao: {estacao}</h4>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                  <i class={icone}></i>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Latitude: {latitude}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Longitude: {longitude}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Data: {data?.toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App