import { FeeSection } from '~/components/molecules'

type PriceType = 'main' | 'vip' | 'royalVip' | 'otherCharge'
type PriceSystems = {
  [key in PriceType]: FeeSection['fees']
}

export const PRICE_SYSTEMS: PriceSystems = {
  main: [
    { name: '20:00〜21:59（60min）', value: '12,000yen' },
    { name: '22:00〜（60min）', value: '15,000yen' },
    { name: '延長料 20:00〜21:59（30min）', value: '6,000yen' },
    { name: '延長料 22:00〜（30min）', value: '7,500yen' },
  ],
  vip: [
    { name: 'ALL TIME（60min）', value: '16,000yen' },
    { name: '延長料 ALL TIME（30min）', value: '8,000yen' },
  ],
  royalVip: [
    { name: '20:00〜21:59（60min）', value: '18,000yen' },
    { name: '22:00〜（60min）', value: '20,000yen' },
    { name: '延長料 20:00〜21:59（30min）', value: '9,000yen' },
    { name: '延長料 22:00〜（30min）', value: '10,000yen' },
  ],
  otherCharge: [
    { name: '本指名（60min）', value: '3,000yen' },
    { name: '場内料（60min）', value: '5,000yen' },
    { name: '同伴（回）', value: '5,000yen' },
    { name: 'サービス料', value: '30%' },
    { name: '消費税', value: '10%' },
  ],
}

export const SYSTEM_NOTE = `※ 当店は自動延長制となります。
※ お1人様による複数本指名をご希望される場合は、追加指名1人につき「セット料金の50%」を頂戴いたします。
※ お連れの女性のお客様は、1名につき「セット料金の50%」を頂戴いたします。
※ ご同伴の場合は「60分制」のご案内となります。
※ 上記金額はお1人様ご利用時の料金です。
`
