import styled from 'styled-components'
import { theme } from '~/theme'

export const InActive = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.inActive};
  margin: 0 ${theme.space.s};
`

export const Active = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.disabled};
  margin: 0 ${theme.space.s};
`
