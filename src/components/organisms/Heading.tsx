import React from "react";
import { BackgroundImage, MainTitle } from "~/components/atoms";

import { lounge1 } from "~/public/images";
import { Box } from "../atoms/Box";

export const Heading: React.FC = () => {
  return (
    <BackgroundImage image={lounge1} size={{ height: "270px" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <MainTitle text="Lounge Jungle" />
      </Box>
    </BackgroundImage>
  );
};
