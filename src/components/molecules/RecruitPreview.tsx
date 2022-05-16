import React from "react";
import { theme } from "~/theme";
import { BackgroundImage, Box, Button, Paragraph, SubTitle } from "../atoms";

type RecruitPreviewType = {
  image: string;
  title: string;
  workingHours: string;
  payment: string;
  treatment: string;
  holiday: string;
};

export const RecruitPreview: React.FC<RecruitPreviewType> = ({
  image,
  title,
  workingHours,
  payment,
  treatment,
  holiday,
}) => {
  return (
    <>
      <BackgroundImage image={image} size={{ height: "170px" }} />
      <Box paddingTop={theme.space.m}>
        <SubTitle text={title} />

        <Box display="flex" justifyContent="space-between">
          <Paragraph text={`勤務時間`} />
          <Paragraph text={workingHours} />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Paragraph text={`給与`} />
          <Paragraph text={payment} />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Paragraph text={`待遇`} />
          <Paragraph text={treatment} />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Paragraph text={`休日`} />
          <Paragraph text={holiday} />
        </Box>
      </Box>
    </>
  );
};
