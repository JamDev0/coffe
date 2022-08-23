import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  body {
    background-color: ${(params) => params.theme.colors.base.background};
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`
