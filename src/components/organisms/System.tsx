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

type PriceType = 'regular' | 'vip' | 'basic' | 'designate' | 'service'
type PriceSystems = {
  [key in PriceType]: FeeSection['fees']
}

const PRICE_SYSTEMS: PriceSystems = {
  regular: [
    { name: '1set', value: '¥15,000' },
    { name: 'additional', value: '¥8,000' },
  ],
  vip: [
    { name: '1set', value: '¥18,000' },
    { name: 'charge', value: '¥0' },
    { name: 'additional', value: '¥9,000' },
  ],
  basic: [
    { name: '1set', value: '60min' },
    { name: 'charge', value: '60min' },
    { name: 'additional', value: '30min' },
  ],
  designate: [
    { name: '本指名(60min)', value: '¥3,000' },
    { name: '場内指名(60min)', value: '¥5,000' },
    { name: '同伴', value: '¥5,000' },
  ],
  service: [
    { name: 'サービス料', value: '30%' },
    { name: '消費税', value: '10%' },
  ],
}

export const System: React.FC = () => (
  <BackgroundWhite>
    <Id id="system" />
    <Box paddingY={theme.space.xl} textAlign="center">
      <Title text="System" />
    </Box>

    <Box paddingX={theme.space.m}>
      <Hr />

      <Box margin={`${theme.space.l} ${theme.space.m}`}>
        <FeeSection title="Regular" fees={PRICE_SYSTEMS.regular} />
      </Box>

      <Hr />

      <Box margin={`${theme.space.l} ${theme.space.m}`}>
        <FeeSection title="Vip" fees={PRICE_SYSTEMS.vip} />
      </Box>

      <Hr />

      <Box marginTop={theme.space.m} paddingX={theme.space.xl}>
        <FeeUl lists={PRICE_SYSTEMS.basic} />

        <Box marginTop={theme.space.m}>
          <FeeUl lists={PRICE_SYSTEMS.designate} />
        </Box>

        <Box marginTop={theme.space.m}>
          <FeeUl lists={PRICE_SYSTEMS.service} />
        </Box>
      </Box>
      <Footnote
        text={`※ 自動延長制となります。
※ 追加指名は1人につき、セット料金の50%頂きます。
※ オーダー料金は別途頂戴いたします。
※ 会員登録時にお名刺を頂戴いたします。
※ 同業者、スカウトマンの入店はお断りいたします。`}
      />
    </Box>

    <Box paddingBottom={theme.space.xl} />
  </BackgroundWhite>
)
