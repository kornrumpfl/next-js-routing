import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 :root {
        --text-primary: #0c2c4d;
        --text-secondary: #2585e6;
        --text-light: #0c2c4d99;
        --white: #ffffff;
        --background-light: #edf0f5;
    }
 
 * {
    box-sizing: border-box;
  }

  body {
    font-family: arial;
    margin: 0;
  }
`;

export default GlobalStyle;
