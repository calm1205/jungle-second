import React from "react";
import { theme } from "~/theme";
import { BackgroundImage, Box, SubTitle } from "~/components/atoms";

type RecruitPreviewType = {
  image: string;
  title: string;
};

export const RecruitPreview: React.FC<RecruitPreviewType> = ({
  image,
  title,
}) => {
  return (
    <>
      <BackgroundImage image={image} size={{ height: "170px" }} />
      <Box paddingTop={theme.space.m}>
        <SubTitle text={title} />
      </Box>
    </>
  );
};
