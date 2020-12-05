import React, {useState} from 'react'
import {MainContainer} from './style'

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