import styled, { css } from 'styled-components';

/**
 * Activeなラジオスタイル
 */
export const StyledActiveRadio = styled.span`
  ${({ theme }) => {
    const size = 10;
    return css`
      width: ${size}px;
      height: ${size}px;

      border-radius: 10px;

      background-color: ${theme.color.main};
    `;
  }}
`;
