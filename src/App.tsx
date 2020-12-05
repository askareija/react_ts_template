/*  * Main root react app
    * Author : Aden Aziz Hasnayakin
    * Created at: Jum'at, 04 Desember 2020 - 10:49 WIB
*/

import React from 'react';

import Button from './components/Button';
import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
        <Button />
      </header>
    </div>
  );
}

export default App;
