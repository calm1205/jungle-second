import { Box, Line } from '~/components/atoms';
import { Wrapper, Text, SubText } from './LineLink.style';
import { theme } from '~/theme';

/**
 * Lineの友だち追加リンク
 */
export const LineLink = () => (
  <Box>
    <Wrapper href="https://line.me/ti/p/5mzMhtFKvz">
      <Line />
      <Text>LINE応募</Text>
    </Wrapper>

    <Box marginTop={theme.space.xs}>
      <SubText>
        友達追加後に「ホームページを見た」とメッセージするとスムーズです。
      </SubText>
    </Box>
  </Box>
);
