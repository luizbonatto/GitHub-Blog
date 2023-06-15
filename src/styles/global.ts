import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 61.5%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['base-background']};
  }

  body, button, input, textarea {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    line-height: 160%;

  }
`
