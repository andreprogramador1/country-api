import React, {useState} from 'react'
import './css/App.css';


import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {

  return (
    
    <>
    {/* <Nav/> */}
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    {/* <MainContainer/> */}
    </>
   
  );
}

export default App;
