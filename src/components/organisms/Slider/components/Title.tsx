import { memo } from 'react'
import styled from 'styled-components'
import { Box, MainTitle } from '~/components/atoms'
import { theme } from '~/theme'

export const TitleBox = memo(styled(Box)`
  position: absolute;
  top: 40%;
  z-index: 1;
  text-align: left;
`)

export const SubTitle = memo(styled(MainTitle)`
  font-size: 2.5rem;
  margin-top: ${theme.space.s};
  white-space: pre-wrap;
`)
