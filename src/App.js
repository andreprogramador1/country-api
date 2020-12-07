import React, {useState, useEffect} from 'react'
import './css/App.css';
import  {useDarkMode} from "./components/useDarkMode"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Themes"
import Toggle from "./components/Toggler"

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (


    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App" style={{ position: 'relative' }}>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
   
  );
}

export default App;
