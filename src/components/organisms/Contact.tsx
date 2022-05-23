import React from "react";
import { theme } from "~/theme";
import { Box, Title } from "../atoms";
import { EmailForm } from "./EmailForm";

export const Contact: React.FC = () => {
  return (
    <Box padding={`${theme.space.xl} 0`}>
      <Box textAlign="center">
        <Title text="Contact" />
      </Box>

      <EmailForm />
    </Box>
  );
};
