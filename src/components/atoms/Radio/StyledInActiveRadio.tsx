import styled, { css } from 'styled-components';

/**
 * 非活性時のラジオボタンスタイル
 */
export const StyledInActiveRadio = styled.span`
  ${({ theme }) => {
    const size = 18;
    return css`
      width: ${size}px;
      height: ${size}px;

      border: 1px solid ${theme.input.border.color.default};
      border-radius: 10px;

      background-color: white;

      display: flex;
      justify-content: center;
      align-items: center;
    `;
  }}
`;
