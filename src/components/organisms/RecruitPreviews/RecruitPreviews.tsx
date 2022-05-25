import React from "react";
import { Box, Id, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { RecruitPreview } from "./RecruitPreview";
import { recruit1, recruit2, recruit3 } from "~/public/images";

export const RecruitPreviews: React.FC = () => {
  return (
    <>
      <Id id="recruit" />
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="Recruit" />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="Cast" image={recruit1} />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="Employee" image={recruit3} />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="Staff" image={recruit2} />
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </>
  );
};
