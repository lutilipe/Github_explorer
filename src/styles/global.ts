import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F0 url(${githubBackground}) no-repeat 70% top;;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 16px 'Roboto', sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;