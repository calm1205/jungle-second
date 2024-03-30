import { ReactNode } from 'react'
import { theme } from '~/theme'
import { lounge1 } from '~/public/images'
import {
  BackgroundImage,
  Box,
  MainTitle,
  RoundButton,
} from '~/components/atoms'
import { Tabs } from '~/components/molecules'
import { RecruitDetail } from '~/components/organisms'
import { MainLayout } from '~/components/templates'
import { useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { CAST, EMPLOYEE, STAFF } from '~/constants'

const TAB_KEYS = ['cast', 'employee', 'staff'] as const
type TabKeys = typeof TAB_KEYS[number]
type TabContents = { [key in TabKeys]: ReactNode }

const tabContents: TabContents = {
  cast: <RecruitDetail {...CAST} />,
  employee: <RecruitDetail {...EMPLOYEE} />,
  staff: <RecruitDetail {...STAFF} />,
}

const Recruit: React.FC = () => {
  const { recruitId } = useParams()
  const recruitIdFromUrl = (recruitId || 'cast') as TabKeys

  return (
    <MainLayout>
      <BackgroundImage image={lounge1} size={{ height: '220px' }}>
        <Box
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
          $marginTop="70px"
        >
          <MainTitle>Recruit</MainTitle>
        </Box>
      </BackgroundImage>

      <Box $marginTop={theme.space.l}>
        <Tabs tabs={TAB_KEYS as unknown as string[]} />
        {tabContents[recruitIdFromUrl]}
      </Box>

      <Box $marginTop={theme.space.s} $display="flex" $justifyContent="center">
        <Box $width="50%">
          <HashLink to="/#contact">
            <RoundButton>Contact</RoundButton>
          </HashLink>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default Recruit
