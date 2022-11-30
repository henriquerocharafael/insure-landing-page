import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --dark-violet: #2d2640;
    --grayish-blue: #95a9c6;
    --very-dark-violet: #2b272f;
    --dark-grayish-violet: #837d87;
    --very-light-gray: #fafafa;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    background: var(--very-light-gray);
    font-family: 'Karla', sans-serif;
    height: 100vh;
    width: 100%;
    --webkit-font-smoothing: antialiased;
    position: relative;
  }

  h1 {
    font-family: 'DM Serif Display', sans-serif;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }
`;
