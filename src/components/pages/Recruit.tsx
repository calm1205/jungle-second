import React from "react";
import { BackgroundImage, Box, MainTitle, Tab } from "~/components/atoms";
import { RecruitDetail, Tabs } from "~/components/molecules";
import { MainLayout } from "~/components/templates";
import { lounge1 } from "~/public/images";
import { theme } from "~/theme";

const Recruit: React.FC = () => {
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

      <Tabs />

      <Box padding={` ${theme.space.l} ${theme.space.m}`}>
        <RecruitDetail />
      </Box>
    </MainLayout>
  );
};

export default Recruit;
