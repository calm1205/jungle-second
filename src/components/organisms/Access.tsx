import { theme } from '~/theme';
import {
  BackgroundImage,
  BackgroundWhite,
  Box,
  Id,
  Paragraph,
  Title,
} from '~/components/atoms';
import { map } from '~/public/images';
import styled from 'styled-components';

export const Access: React.FC = () => {
  return (
    <BackgroundWhite>
      <Id id="access" />
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="Access" />
      </Box>

      <Box padding={theme.space.m} paddingBottom={theme.space.xl}>
        <BackgroundImage image={map} size={{ height: '260px' }} />
        <Paragraph text="六本木駅から徒歩5分" />

        <A href="https://goo.gl/maps/HsgJLaCXtUbSrJQw9">
          <Paragraph
            text="東京都港区六本木3-15-24 belle六本木1階"
            marginTop=""
          />
        </A>
      </Box>
    </BackgroundWhite>
  );
};

const A = styled.a`
  text-decoration: underline;
`;
