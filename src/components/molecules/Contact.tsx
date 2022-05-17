import React from "react";
import { theme } from "~/theme";
import { BackgroundWhite, Box, Title } from "../atoms";
import { EmailForm } from "./EmailForm";

export const Contact: React.FC = () => {
  return (
    <BackgroundWhite>
      <Box padding={`${theme.space.xl} 0`}>
        <Box textAlign="center">
          <Title text="コンタクト" />
        </Box>

        <EmailForm />
      </Box>
    </BackgroundWhite>
  );
};
