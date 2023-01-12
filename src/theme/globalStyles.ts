import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    color: inherit;
    cursor: pointer;
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  .MuiToggleButton-root {
    height: 32px;
    width: 41px;
    margin: 5px;
    padding-top: 2px;
    border-radius: 6px;
    border: 1px solid #185cff;
  }
  .MuiToggleButton-root:hover {
    border: 1px solid #95b3f8;
  }
`;
