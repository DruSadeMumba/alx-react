import logo from './holberton-logo.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>School dashboard</h1>
      </header>
      <hr/>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr/>
      <footer className="App-footer">
        <p><em>Copyright 2020 - Holberton School</em></p>
      </footer>
    </div>
  );
}

export default App;
