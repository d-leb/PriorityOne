import { createGlobalStyle } from 'styled-components'

import { Colors } from 'styles'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 40px;
    padding: 0;

    background-color: ${Colors.PAGE_BACKGROUND};
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Colors.PAGE_TEXT};
  }
`
