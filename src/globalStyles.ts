import robotoBold from '@assets/fonts/robotoBold.ttf';
import robotoMedium from '@assets/fonts/robotoMedium.ttf';
import robotoRegular from '@assets/fonts/robotoRegular.ttf';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'bold';
      src: url(${robotoBold}) format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: 'regular';
      src: url(${robotoRegular}) format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: 'medium';
      src: url(${robotoMedium}) format('truetype');
      font-display: swap;
    }
    *, *::before,*::after {
      box-sizing: border-box;
    }
    body{
      font-family: 'regular','Times New Roman', Times, serif;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    img,
    video,
    iframe {
      display: block;
      max-width: 100%;
    }
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: inherit;
      -webkit-tap-highlight-color: transparent;
    }
    ol, ul {
      list-style: none;
    }
`;
