import styled, { css } from 'styled-components'
import { theme } from '~/theme'

type Footnote = {
  text: string
  /** theme.spaceを推奨 */
  marginTop?: string
}

/**
 * 脚注
 */
export const Footnote: React.FC<Footnote> = ({
  text,
  marginTop = theme.space.s,
}) => <P $marginTop={marginTop}>{text}</P>

const P = styled.p<{ $marginTop: string }>`
  ${({ theme, $marginTop }) => css`
    font-size: 1.2rem;
    color: ${theme.font.color.default};
    letter-spacing: 1px;
    line-height: 1.5rem;
    white-space: pre-wrap;

    margin-top: ${$marginTop};
  `}
`
