import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

const globalStyle = css`
  ${reset}

  html {
    color: ${theme.font.color.default};
    font-size: 8px;
    font-family: ${theme.font.family.default};
    background-color: ${theme.background.color.main};
  }

  a {
    text-decoration: none;
    color: ${theme.font.color.default};
    :visited {
      color: ${theme.font.color.default};
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default createGlobalStyle`${globalStyle}`;
