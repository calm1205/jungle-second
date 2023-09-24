import { FeeSection } from '~/components/molecules'

type PriceType = 'regular' | 'vip' | 'basic' | 'designate' | 'service'
type PriceSystems = {
  [key in PriceType]: FeeSection['fees']
}

export const PRICE_SYSTEMS: PriceSystems = {
  regular: [
    { name: '1set', value: '¥12,000' },
    { name: 'additional', value: '¥6,000' },
  ],
  vip: [
    { name: '1set', value: '¥18,000' },
    { name: 'additional', value: '¥9,000' },
  ],
  basic: [
    { name: '1set', value: '60min' },
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

export const SYSTEM_NOTE = `※ 自動延長制となります。
※ 追加指名は1人につき、セット料金の50%頂きます。
※ オーダー料金は別途頂戴いたします。
※ 会員登録時にお名刺を頂戴いたします。
※ 同業者、スカウトマンの入店はお断りいたします。`
