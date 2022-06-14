import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App () {
  const n = 15
  const [name] = useState("Fernando")

  const redTitle = false

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      {/* O problema: se a regra for branda o componente vaza e o estilo é aplicado em mais de um sem intenção */}
      <MyComponent/>
      <p>Este parágrafo é do APP.js</p>

      {/* CSS Inline Dinamic */}
      <h2 style={n < 10 ? ({color: "blue"}) : {color: "red"}}>
        Css dinâmico
      </h2>
      <h2 style={n < 10 ? ({color: "red"}) : {color: "blue"}}>
        Css dinâmico
      </h2>
      <h2 style={
        name === "Fernando" 
          ? {color: "red", background: "blue"}
          : null
      }>
        Teste nome
      </h2>

      {/* Classe Dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título tem classe dinamica
      </h2>

      {/* CSS Modules */}
      <Title/>
    </div>
  );
}

export default App;
