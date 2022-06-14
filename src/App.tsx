import React from 'react';
import './App.css';
import Home from './pages/Home';
import Router from './router';

function App() {
  return (
    <div className='container'>
        <h1>Movie Time!</h1>
        <Router/>
    </div>   
  );
}

export default App;
