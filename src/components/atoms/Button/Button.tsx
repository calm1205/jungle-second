import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.space.xs} ${theme.space.s};

    font-size: 1.5rem;
    letter-spacing: 2px;

    border: 1px solid ${theme.button.border.color};
    background-color: inherit;
  `}
`;
