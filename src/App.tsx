import React from 'react';
import { getImages } from './api/api';

import './App.css';

function App() {
  //const images = getImages('trees');
  //console.log(images)
  return (
    <div className="App">
      <header>
        <div>Search bar</div>
      </header>
      <div>image LIst:</div>
    </div>
  );
}

export default App;
