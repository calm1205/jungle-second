import styled, { css } from 'styled-components';

export const Hr = styled.hr`
  ${({ theme }) => css`
    color: ${theme.hr.color};
  `}
`;
