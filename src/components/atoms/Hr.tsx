import styled, { css } from 'styled-components'

export const Hr = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.hr.color};
  `}
`
