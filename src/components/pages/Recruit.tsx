import React from "react";
import { theme } from "~/theme";
import { lounge1 } from "~/public/images";
import { BackgroundImage, Box, MainTitle } from "~/components/atoms";
import { Tabs } from "~/components/molecules";
import { Cast, Employee, Staff } from "~/components/organisms";
import { MainLayout } from "~/components/templates";

const Recruit: React.FC = () => {
  const tabContents = [
    { name: "Cast", content: <Cast /> },
    { name: "Employee", content: <Employee /> },
    { name: "Staff", content: <Staff /> },
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
    </MainLayout>
  );
};

export default Recruit;
