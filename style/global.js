import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  /* set font family */
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  overscroll-behavior-y: contain;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }


  /* Set full page */
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  main {
    display: block;
  }
  
  /* Custom resets */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
  }
  ul,
  button,
  p {
    margin: 0;
    padding: 0;
  }
  button {
    outline: none;
  }
  textarea,
  input {
    padding: 0px;
    outline: none;
  }

  /* remove input shadow of IOS safari */
  // CAUTION! DO NOT APPLY TO RADIO, CHECKBOX, SELECT */
  input[type=text],
  input[type=email],
  input[type=password] {
    -webkit-appearance: none;
  }
`;
