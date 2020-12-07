import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Nunito Sans", sans-serif;
    transition: all 0.50s linear;
    font-size: 13px;
    height: 100vh;
  
    font-family: "Nunito Sans", sans-serif;
  }
  `