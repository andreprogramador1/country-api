import React from "react";
import {Nav} from "./styles";
import Toggle from "../Toggler"
import  {useDarkMode} from "../useDarkMode"

export default function NavBar() {

  const [theme, themeToggler] = useDarkMode();

  return (
    <Nav>
      <strong>Where in the world?</strong>
      
    </Nav>
  );
}
