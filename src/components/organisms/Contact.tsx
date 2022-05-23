import React from "react";
import { theme } from "~/theme";
import { Box, Id, Title } from "~/components/atoms";
import { EmailForm } from "./EmailForm";

export const Contact: React.FC = () => {
  return (
    <>
      <Id id="contact" />
      <Box padding={`${theme.space.xl} 0`}>
        <Box textAlign="center">
          <Title text="Contact" />
        </Box>

        <EmailForm />
      </Box>
    </>
  );
};
