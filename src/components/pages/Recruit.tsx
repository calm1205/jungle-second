import React from "react";
import { MainLayout } from "~/components/templates";
import { BackgroundImage, Box, MainTitle } from "~/components/atoms";
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
    </MainLayout>
  );
};

export default Recruit;
