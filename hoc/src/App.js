import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter  from './Components/ClickCounter';
import  HoverCounter  from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name = "Edith"/>
      <HoverCounter name = "Vinayak"/>
    </div>
  );
}

export default App;
