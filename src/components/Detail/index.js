import React from 'react';
import  { Container } from './styles'
import DetailApi from '../DetailApi'
import Nav from '../NavBar'

export default function Detail() {

  return (
    <>
    <Nav/>
    <Container>
      <a href='/'>Back</a>

      <DetailApi/>
    </Container>
    </>
  );
}