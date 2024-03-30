import { FC, useEffect, useRef, useState } from 'react'
import { lounge1, lounge2, lounge3, lounge4 } from '~/public/images'
import { BackgroundImage, Box } from '~/components/atoms'
import { theme } from '~/theme'
import { Indicator } from './Indicator/Indicator'

const IMAGES = [lounge1, lounge2, lounge3, lounge4]

/**
 * カルーセルの画像表示
 */
export const ImageGallery: FC = () => {
  const ImageFlameRef = useRef<HTMLDivElement>(null)
  const ImageRefs = IMAGES.map(() => useRef<HTMLDivElement>(null))
  const [activeIndex, setActiveIndex] = useState(0)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const imageIndex = Number(entry.target.getAttribute('data-index'))
        if (entry.isIntersecting) setActiveIndex(imageIndex)
      })
    },
    { root: ImageFlameRef.current, threshold: 1 }
  )

  useEffect(() => {
    ImageRefs.forEach((imageRef) => {
      if (!imageRef.current) return
      observer.observe(imageRef.current)
    })
  }, [])

  return (
    <>
      <div
        ref={ImageFlameRef}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
        }}
      >
        {ImageRefs.map((ref, index) => (
          <div
            ref={ref}
            key={`image_${index}`}
            data-index={index}
            style={{ minWidth: '100vw', scrollSnapAlign: 'start' }}
          >
            <BackgroundImage
              image={IMAGES[index]}
              size={{ width: '100%', height: '230px' }}
            />
          </div>
        ))}
      </div>

      <Box $margin={theme.space.m}>
        <Indicator length={4} activeIndex={activeIndex} />
      </Box>
    </>
  )
}
