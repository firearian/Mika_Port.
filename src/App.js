import logo from './logo.svg';
import React from "react";
import './App.css';
import Button from './components/CustomButtons/Button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Button type="button" color="primary">Primary</Button>
      </header>
    </div>
  );
}

export default App;
