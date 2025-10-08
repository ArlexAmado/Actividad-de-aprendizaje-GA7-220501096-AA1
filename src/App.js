import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Arlex Amado</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Mi Aplicacion React</h1>
          <MiComponente />
        </header>
      </div>
  );
}
export default App;
