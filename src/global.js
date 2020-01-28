import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;

  }

html, body, #root {
  min-height: 100%;
}

body {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}

`;
