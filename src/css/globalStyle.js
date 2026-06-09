import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }

  html, body {
    background: #47171A;
    background: linear-gradient(180deg, rgba(71, 23, 26, 1) 0%, rgba(5, 1, 1) 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }
`;