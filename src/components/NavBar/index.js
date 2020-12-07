import React from "react";
import {Nav} from "./styles";
import  {useDarkMode} from "../useDarkMode"

export default function NavBar() {

  const [theme, themeToggler] = useDarkMode();

  return (
    <Nav>
      <strong>Where in the world?</strong>
    </Nav>
  );
}
