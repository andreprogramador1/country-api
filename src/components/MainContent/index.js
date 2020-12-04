import React, {useState} from 'react'
import {MainContainer} from './style'
import FetchApi from '../FetchApi'
import Nav from '../NavBar'
import DropSearchContainer from '../DropSearchContainer'

export default function MainContent() {

  const [region, setRegion] = useState('All')

  return (
    <>
    <Nav/>
    <MainContainer>
      
      <DropSearchContainer region={region} setRegion={setRegion}/>
      <FetchApi region={region}/>
    </MainContainer>
    </>
  );
}