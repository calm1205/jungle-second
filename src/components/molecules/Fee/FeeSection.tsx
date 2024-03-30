import { styled } from 'styled-components'
import { Box } from '~/components/atoms'
import { FeeLi, FeeUl } from '~/components/molecules'

export type FeeSection = {
  title: string
  fees: FeeLi[]
}

/**
 * 料金の1セクション
 */
export const FeeSection: React.FC<FeeSection> = ({ title, fees }) => (
  <Box $display="flex" $flexDirection="column" $gap="10px" $alignItems="center">
    <Title>■{title}■</Title>
    <FeeUl lists={fees} />
  </Box>
)

const Title = styled.h3`
  font-size: 2rem;
`
