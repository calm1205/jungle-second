import { BackgroundWhite, Box, Footnote, Id, Title } from '~/components/atoms'
import { theme } from '~/theme'
import { FeeSection } from '~/components/molecules'
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
      paddingX={theme.space.l}
    >
      <FeeSection title="MAIN" fees={PRICE_SYSTEMS.main} />
      <FeeSection title="VIP" fees={PRICE_SYSTEMS.vip} />
      <FeeSection title="ROYAL VIP" fees={PRICE_SYSTEMS.royalVip} />
      <FeeSection title="OTHER CHARGE" fees={PRICE_SYSTEMS.otherCharge} />

      <Footnote text={SYSTEM_NOTE} />
    </Box>

    <Box paddingBottom={theme.space.xl} />
  </BackgroundWhite>
)
