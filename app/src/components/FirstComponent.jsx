// Padrão do mercado com o export de uma const
import React from 'react'
import MyComponents from './MyComponents'

const FirstComponent = () => {
  return (
    <div>
        <h1>Meu primeiro componente</h1>
        <p className='Teste'></p>
        <MyComponents/>
    </div>
  )
}

export default FirstComponent
