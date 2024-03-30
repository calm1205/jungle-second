import { FC } from 'react'
import { Box, Instagram, Twitter } from '~/components/atoms'

/**
 * TwitterやInstagramのリンク
 */
export const SnsLinks: FC = () => {
  const sns = [
    { link: 'https://twitter.com/LoungeJUNGLE_', icon: <Twitter /> },
    { link: 'https://www.instagram.com/jungle.second/', icon: <Instagram /> },
  ] as const

  return (
    <Box
      $display="flex"
      $justifyContent="space-between"
      $alignItems="center"
      $width="100px"
    >
      {sns.map((s) => (
        <a key={s.link} href={s.link} target="_blank" rel="noreferrer">
          {s.icon}
        </a>
      ))}
    </Box>
  )
}
