import React from 'react'
import {MainContainer} from './style'


import { GlobalStyles } from "../GlobalStyles/GlobalStyles";



import Nav from '../NavBar'
import DropSearchContainer from '../DropSearchContainer'

export default function MainContent() {

  

  return (

     
      <>
         <Nav/>
        
   
        <MainContainer>
          
          <DropSearchContainer/>
          
        </MainContainer>
      </>

  
  );
}