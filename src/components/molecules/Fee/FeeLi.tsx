import styled from 'styled-components'
import { Box, Hr } from '~/components/atoms'

export type FeeLi = {
  name: string
  value: string
}

/**
 * 料金のリストの1パーツ
 */
export const FeeLi: React.FC<FeeLi> = ({ name, value }) => (
  <FeeLiStyle>
    <Box
      $display="flex"
      $justifyContent="space-between"
      $gap="10px"
      $alignItems="center"
    >
      <Name>{name}</Name>
      <Hr />
      <Value>{value}</Value>
    </Box>
  </FeeLiStyle>
)

const FeeLiStyle = styled.li`
  list-style: none;
  font-size: 1.7rem;
`

const Name = styled.span`
  font-size: 1.5rem;
  white-space: nowrap;
`
const Value = styled.span`
  font-size: 1.2rem;
`
