import { theme } from '~/theme';
import { Box, Id, Paragraph, Title } from '~/components/atoms';
import { SnsLinks } from '~/components/organisms';
import { LineLink } from '~/components/molecules';

/**
 * 連絡手段
 */
export const Contact: React.FC = () => (
  <>
    <Id id="contact" />
    <Box padding={`${theme.space.xl} 0`}>
      <Box textAlign="center">
        <Title text="Contact" />
      </Box>

      <Box padding={theme.space.m}>
        <Paragraph text="お問い合わせは以下からお願いします。"></Paragraph>
        <Box display="flex" justifyContent="center" marginTop={theme.space.m}>
          <LineLink />
        </Box>
      </Box>

      {/* <EmailForm /> */}

      <Box display="flex" justifyContent="center" marginTop={theme.space.m}>
        <SnsLinks />
      </Box>
    </Box>
  </>
);
