import React from "react";
import { Box, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { RecruitPreview } from "../molecules/RecruitPreview";
import { recruit1, recruit2, recruit3 } from "~/public/images";

export const Recruit: React.FC = () => {
  return (
    <>
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="Recruit" />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="キャスト求人" image={recruit1} />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="正社員" image={recruit3} />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="ホールスタッフ" image={recruit2} />
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </>
  );
};
