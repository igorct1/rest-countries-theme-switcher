import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

html {
  font-size: 62.5%;
}

body, button, input {
  font-size: 1.4rem;
  font-family: 'Nunito Sans', sans-serif;
}

`;
