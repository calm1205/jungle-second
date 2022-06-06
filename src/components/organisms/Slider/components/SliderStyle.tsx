import styled from 'styled-components';
import { theme } from '~/theme';

type SliderStyleType = {
  image: string;
};
export const SliderStyle = styled.li<SliderStyleType>`
  position: absolute;
  top: 0;

  background-size: cover;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;

  width: 100%;
  height: calc(100vh - ${theme.space.xl});

  opacity: 0;
  transition: opacity 1s linear, transform 6.3s linear;
  &.show {
    opacity: 1;
  }
  &.zoom {
    transform: scale(1.3);
  }
`;
