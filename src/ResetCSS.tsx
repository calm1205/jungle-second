import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset}

  html {
    font-size: 8px;
  }

  * {
    font-family: sans-serif;
  }
`;
const ResetCSS = createGlobalStyle`${globalStyle}`;

export default ResetCSS;
