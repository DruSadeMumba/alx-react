import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


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
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">OK</button>
      </div>
      <hr/>
      <footer className="App-footer">
        <p><em>Copyright {getFullYear()} - {getFooterCopy()}</em></p>
      </footer>
    </div>
  );
}

export default App;
