import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Id, Title } from "~/components/atoms";
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
        <RecruitPreview title="Cast" text="キャスト" image={recruit1} />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview title="Employee" text="正社員" image={recruit3} />
      </Box>

      <Box padding={theme.space.m}>
        <RecruitPreview
          title="Staff"
          text="ホールスタッフ（アルバイト）"
          image={recruit2}
        />
      </Box>

      <Box paddingX={theme.space.m}>
        <Link to={"/recruit"}>
          <Button>view more</Button>
        </Link>
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </>
  );
};
