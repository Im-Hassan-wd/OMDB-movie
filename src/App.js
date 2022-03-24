import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App
