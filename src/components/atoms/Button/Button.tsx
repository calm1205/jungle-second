import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: ${theme.button.main.color};
    background-color: ${theme.button.main.bg};
    border: none;
    padding: ${theme.space.xs} ${theme.space.s};
    width: 100%;
  `}
`;
