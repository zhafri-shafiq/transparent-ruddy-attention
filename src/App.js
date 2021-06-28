import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const movies = await response.json();
      console.log('movies: ', movies);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and your changes will live-update automatically.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Nice Movies:</p>
        
      </header>
    </div>
  );
}

export default App;
