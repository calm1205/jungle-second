import React from "react";
import { theme } from "~/theme";
import { BackgroundImage, Box, Paragraph, Title } from "../atoms";
import { map } from "~/public/images";

export const Access: React.FC = () => {
  return (
    <>
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="アクセス" />
      </Box>

      <Box padding={theme.space.m} paddingBottom={theme.space.xl}>
        <BackgroundImage image={map} size={{ height: "260px" }} />
        <Paragraph text="六本木駅から徒歩5分" />
        <Paragraph text="東京都港区六本木3-15-24 belle六本木1階" marginTop="" />
        <Paragraph text="090-6022-5578" marginTop="" />
      </Box>
    </>
  );
};
