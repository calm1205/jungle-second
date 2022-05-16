import React from "react";
import styled from "styled-components";
import { BackgroundWhite, Box, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { RecruitPreview } from "./RecruitPreview";
import { recruit1, recruit2, recruit3 } from "~/public/images";

export const Recruit: React.FC = () => {
  return (
    <BackgroundWhite>
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="採用" />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview
          title="キャスト求人"
          image={recruit1}
          workingHours="20時 〜 ラスト"
          payment="採用時給 5,000〜"
          treatment="全額日払い、送迎有り"
          holiday="日・祝"
        />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview
          title="正社員"
          image={recruit3}
          workingHours="18時 〜 ラスト"
          payment="35万以上 〜"
          treatment="送迎、賄い"
          holiday="日・祝"
        />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview
          title="ホールスタッフ"
          image={recruit2}
          workingHours="18時 〜 ラスト"
          payment="時給 1,500〜"
          treatment="送迎、賄い"
          holiday="日・祝"
        />
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </BackgroundWhite>
  );
};
