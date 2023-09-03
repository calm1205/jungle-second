import styled, { css } from 'styled-components'

export const HorizontalLine = styled.div`
  ${({ theme }) => css`
    height: 1px;
    background-color: ${theme.hr.color};
  `}
`
