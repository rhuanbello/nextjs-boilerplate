import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    min-height: 100vh;

  }

  body {
    background: var(--neutral-white-primary);
    font-size: 1.6rem;

  }

  ul {
    list-style: none;

  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }

`

export default GlobalStyles
