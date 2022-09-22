import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './assets/piggy-block-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='landing-title'>
            Launching Soon!
          </h2>
          <Routes>
            <Route path='/' />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
