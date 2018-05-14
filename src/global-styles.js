import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #f4f1f3;
    margin: 0;
  }

  body {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f4f1f3;
    min-height: 100%;
    min-width: 100%;
  }

  #page-wrap {
    padding: 2% 8%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
