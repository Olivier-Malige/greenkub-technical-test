import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background: white;
    margin: 0;
    line-height: 1.6;
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    overflow-y: hidden;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  
  h1, h2, h3, h4, h5, h6, p, span, div {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;
