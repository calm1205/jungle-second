import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset}
  * {
    color: red;
  }
`;
const ResetCSS = createGlobalStyle`${globalStyle}`;

export default ResetCSS;
