import './App.css';
import React from 'react';
import Products from './product/Products';
import 'bootstrap/dist/css/bootstrap.css';
import SocialMedia from './SocialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WR Militaria</h1> 
        <SocialMedia/>
      </header>
      <div className='container-fluid'>
        <Products/>
      </div>
    </div>
  );
}

export default App;
