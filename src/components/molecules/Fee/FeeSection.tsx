import { Box, SubTitle } from '~/components/atoms'
import { FeeLi, FeeUl } from '~/components/molecules'

export type FeeSection = {
  title: string
  fees: FeeLi[]
}

/**
 * 料金の1セクション
 */
export const FeeSection: React.FC<FeeSection> = ({ title, fees }) => (
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Box width="40%" textAlign="center">
      <SubTitle text={title} />
    </Box>

    <Box width="45%">
      <FeeUl lists={fees} />
    </Box>
  </Box>
)
