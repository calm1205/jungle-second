import React, { useState } from 'react';
import { lounge1, lounge2, lounge3, lounge4 } from '~/public/images';
import { BackgroundImage, Box } from '~/components/atoms';
import SwipeableViews from 'react-swipeable-views';
import { theme } from '~/theme';
import { Hrs } from './Hrs';

export const ImageGallery: React.FC = () => {
  const [index, setIndex] = useState(0);
  const onChangeIndex = (i: number) => setIndex(i);

  return (
    <>
      <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
        <Box paddingX={theme.space.m}>
          <BackgroundImage
            image={lounge1}
            size={{ width: '100%', height: '230px' }}
          />
        </Box>

        <Box paddingX={theme.space.m}>
          <BackgroundImage
            image={lounge2}
            size={{ width: '100%', height: '230px' }}
          />
        </Box>

        <Box paddingX={theme.space.m}>
          <BackgroundImage
            image={lounge3}
            size={{ width: '100%', height: '230px' }}
          />
        </Box>

        <Box paddingX={theme.space.m}>
          <BackgroundImage
            image={lounge4}
            size={{ width: '100%', height: '230px' }}
          />
        </Box>
      </SwipeableViews>

      <Box margin={theme.space.m}>
        <Hrs length={4} active={index} />
      </Box>
    </>
  );
};
