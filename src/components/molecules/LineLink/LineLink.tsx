import { Line } from '../../atoms';
import { Wrapper, Text } from './LineLink.style';

/**
 * Lineの友だち追加リンク
 */
export const LineLink = () => (
  <Wrapper href="https://line.me/ti/p/5mzMhtFKvz">
    <Line />
    <Text>友だち追加</Text>
  </Wrapper>
);
