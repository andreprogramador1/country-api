import React from 'react';
import  { Container, BottomContainer } from './styles'
import DetailApi from '../DetailApi'
import Nav from '../NavBar'
import { Link } from 'react-router-dom';

export default function Detail() {

  return (
    <>

    <Nav/>

    <Link to='/' style={{ padding: '30px 40px', textDecoration: 'none', color: 'black' }}>Back</Link>

    <Container>

      <DetailApi/>

    

    </Container>

    </>
  );
}