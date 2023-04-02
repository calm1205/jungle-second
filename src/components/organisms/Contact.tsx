import { theme } from '~/theme';
import { Box, Id, Instagram, Title, Twitter } from '~/components/atoms';
import { EmailForm } from './EmailForm/EmailForm';

export const Contact: React.FC = () => {
  return (
    <>
      <Id id="contact" />
      <Box padding={`${theme.space.xl} 0`}>
        <Box textAlign="center">
          <Title text="Contact" />
        </Box>

        <EmailForm />

        <Box display="flex" justifyContent="center" marginTop={theme.space.m}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100px"
          >
            <a
              href={'https://twitter.com/LoungeJUNGLE_'}
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>

            <a
              href={'https://www.instagram.com/loungejungle_/'}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
};
