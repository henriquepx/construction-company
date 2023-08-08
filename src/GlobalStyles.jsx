import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-one: #263640;
    --color-white: #FFFFFF;

    --font: 'Montserrat', sans-serif;
  }

  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  scroll-behavior: smooth;
  vertical-align: baseline;
  list-style: none;
  text-decoration: none;
}
`;