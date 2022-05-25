import React from "react";
import { BackgroundImage, Box, MainTitle } from "~/components/atoms";
import { RecruitDetail, Tabs } from "~/components/molecules";
import { MainLayout } from "~/components/templates";
import { lounge1 } from "~/public/images";
import { theme } from "~/theme";

const Recruit: React.FC = () => {
  const tabContents = [
    { name: "Cast", content: <RecruitDetail /> },
    { name: "Employee", content: <RecruitDetail /> },
    { name: "Staff", content: <RecruitDetail /> },
  ];

  return (
    <MainLayout>
      <BackgroundImage image={lounge1} size={{ height: "220px" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="70px"
        >
          <MainTitle text="Recruit" />
        </Box>
      </BackgroundImage>

      <Box marginTop={theme.space.l}>
        <Tabs tabContents={tabContents} initialActiveIndex={0} />
      </Box>

      <Box padding={` ${theme.space.l} ${theme.space.m}`}>
        <RecruitDetail />
      </Box>
    </MainLayout>
  );
};

export default Recruit;
