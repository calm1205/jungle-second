import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme }) =>
    css`
      color: ${theme.font.color.default};
      letter-spacing: 2px;
      font-family: ${theme.font.family.default};

      border: none;
      border-bottom: solid 1px ${theme.input.border.color.default};

      background-color: inherit;
      padding: ${theme.space.xs};
      box-sizing: border-box;
      width: 100%;

      :focus {
        outline: none;
      }
    `}
`;
