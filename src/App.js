import React, {useState} from 'react'
import './css/App.css';
import Nav from './components/NavBar';
import FetchApi from './components/FetchApi';
import DropSearchContainer from './components/DropSearchContainer';
import MainContainer from './components/MainContent';

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
