import { Link } from 'react-router-dom'
import { Box, Id, Title } from '~/components/atoms'
import { theme } from '~/theme'
import { RecruitPreview } from './RecruitPreview'
import { cast, staff, employee } from '~/public/images'

export const RecruitPreviews: React.FC = () => {
  return (
    <>
      <Id id="recruit" />
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="Recruit" />
      </Box>

      <Box padding={theme.space.m}>
        <Link to="/recruit/cast">
          <RecruitPreview title="Cast" text="キャスト" image={cast} />
        </Link>
      </Box>

      <Box padding={theme.space.m}>
        <Link to="/recruit/employee">
          <RecruitPreview title="Employee" text="正社員" image={employee} />
        </Link>
      </Box>

      <Box padding={theme.space.m}>
        <Link to="/recruit/staff">
          <RecruitPreview
            title="Staff"
            text="ホールスタッフ（アルバイト）"
            image={staff}
          />
        </Link>
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </>
  )
}
