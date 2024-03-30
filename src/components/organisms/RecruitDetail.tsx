import { theme } from '~/theme'
import { Box, Footnote, Title } from '~/components/atoms'
import { HeadingParagraph } from '~/components/molecules'

export type RecruitDetail = {
  footnote: string
  title: string
  time: string
  payment: string
  holiday: string
  treatment: string
}

export const RecruitDetail: React.FC<RecruitDetail> = ({
  footnote,
  title,
  time,
  payment,
  holiday,
  treatment,
}) => (
  <Box $padding={`${theme.space.l} ${theme.space.m}`}>
    <Footnote text={footnote} marginTop="0" />
    <Title text={title} />

    <Box $display="flex" $flexDirection="column" $gap={theme.space.l}>
      <HeadingParagraph title="勤務時間" text={time} />
      <HeadingParagraph title="給与" text={payment} />
      <HeadingParagraph title="休日" text={holiday} />
      <HeadingParagraph title="待遇" text={treatment} />
    </Box>
  </Box>
)
