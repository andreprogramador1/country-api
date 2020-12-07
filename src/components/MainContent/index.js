import React from 'react'
import {MainContainer} from './style'
import Toggle from '../Toggler'
import  {useDarkMode} from "../useDarkMode"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "../Theme/Themes"

import Nav from '../NavBar'
import DropSearchContainer from '../DropSearchContainer'

export default function MainContent() {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (

    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      <Nav>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </Nav>
          
      <MainContainer>
        
        <DropSearchContainer/>
        
      </MainContainer>
      
          
        
      </>
    </ThemeProvider>


  
    

     
 
  
  );
}