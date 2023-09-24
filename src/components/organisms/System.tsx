import {
  BackgroundWhite,
  Box,
  Footnote,
  Hr,
  Id,
  Title,
} from '~/components/atoms'
import { theme } from '~/theme'
import { FeeUl, FeeSection } from '~/components/molecules'
import { PRICE_SYSTEMS, SYSTEM_NOTE } from '~/constants'

export const System: React.FC = () => (
  <BackgroundWhite>
    <Id id="system" />
    <Box paddingY={theme.space.xl} textAlign="center">
      <Title text="System" />
    </Box>

    <Box
      display="flex"
      flexDirection="column"
      gap={theme.space.l}
      paddingX={theme.space.m}
    >
      <Hr />
      <Box marginX={theme.space.m}>
        <FeeSection title="Regular" fees={PRICE_SYSTEMS.regular} />
      </Box>
      <Hr />
      <Box marginX={theme.space.m}>
        <FeeSection title="Vip" fees={PRICE_SYSTEMS.vip} />
      </Box>
      <Hr />

      <Box
        marginTop={theme.space.m}
        paddingX={theme.space.xl}
        display="flex"
        flexDirection="column"
        gap={theme.space.m}
      >
        <FeeUl lists={PRICE_SYSTEMS.basic} />
        <FeeUl lists={PRICE_SYSTEMS.designate} />
        <FeeUl lists={PRICE_SYSTEMS.service} />
      </Box>

      <Footnote text={SYSTEM_NOTE} />
    </Box>

    <Box paddingBottom={theme.space.xl} />
  </BackgroundWhite>
)
