import styled, { css } from 'styled-components'
import { FeeLi } from '~/components/molecules'

type FeeUlType = {
  lists: FeeLi[]
}

/**
 * 料金のリスト表示
 */
export const FeeUl: React.FC<FeeUlType> = ({ lists }) => (
  <FeeUlStyle>
    {lists.map((l) => (
      <FeeLi name={l.name} value={l.value} key={l.name} />
    ))}
  </FeeUlStyle>
)

const FeeUlStyle = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.s};
    width: 100%;
  `}
`
