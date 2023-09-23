import { Box, Heading } from '~/components/atoms'
import { theme } from '~/theme'

type HeadingParagraph = {
  title: string
  text: string
}

export const HeadingParagraph: React.FC<HeadingParagraph> = ({
  title,
  text,
}) => (
  <Box>
    <Heading text={title} />
    <Box marginLeft={theme.space.s}>
      <p
        style={{
          fontSize: '1.5rem',
          lineHeight: '2rem',
          letterSpacing: theme.font.letterSpacing.paragraph,
          whiteSpace: 'pre-wrap',
        }}
      >
        {text}
      </p>
    </Box>
  </Box>
)
