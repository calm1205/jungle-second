import styled, { css } from 'styled-components'

/**
 * 画面全体のタイトル
 */
export const MainTitle = styled.h1`
  ${({ theme }) =>
    css`
      font-size: 5rem;
      letter-spacing: 3px;
      color: ${theme.font.color.secondary};
    `}
`
