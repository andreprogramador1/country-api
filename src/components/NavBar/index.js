import React from "react";
import {Nav} from "./styles";



export default function NavBar(props) {

  return (
    <Nav>
      <strong>Where in the world?</strong>
      {props.children}
    </Nav>
  );
}
