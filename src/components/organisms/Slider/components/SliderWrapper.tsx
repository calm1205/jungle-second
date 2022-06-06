import styled from 'styled-components';
import { theme } from '~/theme';

export const SliderWrapper = styled.ul`
  width: 100%;
  height: calc(100vh - ${theme.space.xl});
  position: relative;
  overflow: hidden;
`;
