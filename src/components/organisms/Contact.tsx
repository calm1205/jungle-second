import { theme } from '~/theme';
import { Box, Id, Line, Title } from '~/components/atoms';
import { EmailForm } from './EmailForm/EmailForm';
import { SnsLinks } from './SnsLinks/SnsLinks';

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

      <Line />
      <EmailForm />

      <Box display="flex" justifyContent="center" marginTop={theme.space.m}>
        <SnsLinks />
      </Box>
    </Box>
  </>
);
