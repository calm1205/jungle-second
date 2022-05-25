import React from "react";
import { BackgroundImage, Box, MainTitle, Tab } from "~/components/atoms";
import { Tabs } from "~/components/molecules";
import { MainLayout } from "~/components/templates";
import { lounge1 } from "~/public/images";

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
    </MainLayout>
  );
};

export default Recruit;
