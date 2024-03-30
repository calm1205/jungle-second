import { Box } from '~/components/atoms'
import { FC } from 'react'
import { Active, InActive } from './Indicator.style'

type Indicator = {
  /** インジケーターの数 */
  length: number
  /** 選択されている要素index */
  activeIndex: number
}

/**
 * ImageGalleryの選択中indexを示すインジケーター
 */
export const Indicator: FC<Indicator> = ({ length, activeIndex }) => (
  <Box $display="flex">
    {[...Array(length)].map((_, i) => {
      if (i === activeIndex) return <Active key={`hr_${i}`} />
      return <InActive key={`hr_${i}`} />
    })}
  </Box>
)
