import React from 'react';
import './App.css';
import PriceChangeComponent from './components/PriceChangeComponent';

function App() {
  const apiUrl = 'https://www.aeo.co.uk/en-gb/aerie/activewear'; // Replace with a valid API URL

  return (
    <div className="App">
      <header className="App-header">
        <PriceChangeComponent apiUrl={apiUrl} />
      </header>
    </div>
  );
}

export default App;
