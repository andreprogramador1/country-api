import React, {useState} from 'react'
import './css/App.css';
import Nav from './components/NavBar';
import FetchApi from './components/FetchApi';
import DropSearchContainer from './components/DropSearchContainer';
import MainContainer from './components/MainContent';

function App() {

  return (
    <>
    <Nav/>
    <MainContainer/>
    </>
   
  );
}

export default App;
