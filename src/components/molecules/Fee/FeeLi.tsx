import styled from 'styled-components'
import { Box } from '../../atoms'

export type FeeLi = {
  name: string;
  value: string;
};

/**
 * 料金のリストの1パーツ
 */
export const FeeLi: React.FC<FeeLi> = ({ name, value }) => {
  return (
    <FeeLiStyle>
      <Box display="flex" justifyContent="space-between">
        <span>{name}</span>
        <span>{value}</span>
      </Box>
    </FeeLiStyle>
  )
}

const FeeLiStyle = styled.li`
  list-style: none;
  font-size: 1.7rem;
`
