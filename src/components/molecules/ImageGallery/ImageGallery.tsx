import { useState } from 'react';
import { lounge1, lounge2, lounge3, lounge4 } from '~/public/images';
import { BackgroundImage, Box } from '~/components/atoms';
import SwipeableViews from 'react-swipeable-views';
import { theme } from '~/theme';
import { Hrs } from './Hrs';

export const ImageGallery: React.FC = () => {
  const [index, setIndex] = useState(0);
  const onChangeIndex = (i: number) => setIndex(i);
  const images = [lounge1, lounge2, lounge3, lounge4];

  return (
    <>
      <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
        {images.map((image, index) => (
          <Box paddingX={theme.space.m} key={`image_${index}`}>
            <BackgroundImage
              image={image}
              size={{ width: '100%', height: '230px' }}
            />
          </Box>
        ))}
      </SwipeableViews>

      <Box margin={theme.space.m}>
        <Hrs length={4} active={index} />
      </Box>
    </>
  );
};
