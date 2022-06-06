import React, { useCallback, useEffect, useState } from 'react';
import { MainTitle } from '~/components/atoms';
import { slider1, slider2, slider3, slider4 } from '~/public/images';
import { theme } from '~/theme';
import { SliderStyle, SliderWrapper, TitleBox, SubTitle } from './components';

const IMAGES = [slider1, slider2, slider3, slider4] as const;

export const Slider: React.FC = () => {
  const [showIndex, setShow] = useState(1);
  const [zoomIndex, setZoom] = useState(0);

  const _callback = useCallback(() => {
    setShow((old) => {
      if (old < IMAGES.length - 1) return old + 1;
      return 0;
    });
    setZoom((old) => {
      if (old < IMAGES.length - 1) return old + 1;
      return 0;
    });
  }, []);

  useEffect(() => {
    _callback();
    const inter = setInterval(_callback, 6000);
    return () => clearInterval(inter);
  }, []);

  const sliders = IMAGES.map((image, index) => (
    <SliderStyle
      key={index}
      image={image}
      className={`
       ${index === showIndex ? 'show zoom' : ''}
       ${index === zoomIndex ? 'zoom' : ''}
      `}
    />
  ));

  return (
    <SliderWrapper>
      <TitleBox margin={theme.space.m}>
        <MainTitle>Lounge Jungle</MainTitle>
        <SubTitle>{'気品と優美さを組み込んだ\n洗礼された空間'}</SubTitle>
      </TitleBox>
      {sliders}
    </SliderWrapper>
  );
};
