//rafce
import React, { useState } from 'react'
//hook do React
const App = () => {
  const [contador, setContador] =  useState(0)
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button
        onClick = {() => setContador(contador + 1)}>
        Incrementar
      </button>
      <button
      onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>
      <button
      onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </div>
  )
}

export default App