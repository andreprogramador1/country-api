import React, {useState, useEffect} from 'react'
import './css/App.css';


import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {

  

  return (
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
  );
}

export default App;
