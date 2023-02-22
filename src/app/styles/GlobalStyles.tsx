import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1160px) {
      font-size: 75%;
    }
  }

  body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #23d997;
    font-family: 'Inter', sans-serif;
    color: white;
    background: transparent;
    transition: all 0.5s ease;

    &:hover {
      background-color: #23d997;
      color: white;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
    color: white;
  }

  h3 {
    color: white;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }
`
