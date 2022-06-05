import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { slider1, slider2, slider3, slider4 } from '~/public/images';
import { theme } from '~/theme';
import { MainTitle } from '~/components/atoms';

const IMAGES = [slider1, slider2, slider3, slider4] as const;

export const Slider: React.FC = () => {
  const [slider, setSlider] = useState(0);

  const _callback = useCallback(() => {
    setSlider((old) => {
      if (old < IMAGES.length - 1) return old + 1;
      return 0;
    });
  }, []);

  useEffect(() => {
    const inter = setInterval(_callback, 5000);
    return () => clearInterval(inter);
  }, []);

  const sliders = IMAGES.map((image, index) => {
    console.log(slider);
    return (
      <SliderStyle
        key={index}
        image={image}
        className={index === slider ? 'show' : ''}
      />
    );
  });
  return (
    <SliderWrapper>
      <Title>Lounge Jungle</Title>
      {sliders}
    </SliderWrapper>
  );
};

const SliderWrapper = styled.ul`
  width: 100%;
  height: calc(100vh - ${theme.space.xl});
  position: relative;
`;

const Title = memo(styled(MainTitle)`
  position: absolute;
  top: 50%;
  z-index: 1;
`);

type SliderStyleType = {
  image: string;
};
const SliderStyle = styled.li<SliderStyleType>`
  position: absolute;
  top: 0;

  background-size: cover;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;

  width: 100%;
  height: calc(100vh - ${theme.space.xl});

  opacity: 0;
  transition: 2s;
  &.show {
    opacity: 1;
  }
`;
