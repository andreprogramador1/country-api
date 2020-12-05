import React from 'react';
import  { Container, BottomContainer } from './styles'
import DetailApi from '../DetailApi'
import Nav from '../NavBar'
import { Link } from 'react-router-dom';

export default function Detail() {

  return (
    <>

    <Nav style={{ marginBottom: '40px' }}/>

    

    <Container>
      <Link to='/' style={{ textDecoration: 'none', color: 'black', backgroundColor: 'white', boxShadow: '0 3px 7px rgba(0,0,0,0.1)', padding: '10px 30px' }}>Back</Link>
      <DetailApi/>

    

    </Container>

    </>
  );
}