import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0; /* Adicione uma cor de fundo se necessário */
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
