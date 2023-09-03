import { theme } from '~/theme'
import { Box, Footnote, Title } from '~/components/atoms'
import { HeadingParagraph } from '~/components/molecules/HeadingParagraph'

type Props = {
  footnote: string;
  title: string;
  time: string;
  payment: string;
  holiday: string;
  treatment: string;
};

export const RecruitDetail: React.FC<Props> = ({
  footnote,
  title,
  time,
  payment,
  holiday,
  treatment,
}) => {
  return (
    <Box padding={` ${theme.space.l} ${theme.space.m}`}>
      <Footnote text={footnote} marginTop="0" />
      <Title text={title} />

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="勤務時間" text={time} />
      </Box>

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="給与" text={payment} />
      </Box>

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="休日" text={holiday} />
      </Box>

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="待遇" text={treatment} />
      </Box>
    </Box>
  )
}
