// Styles
import './App.css';
// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponents/>
        <Events/>
        <Challenge/>
      </div>
    </div>
  );
}

export default App;