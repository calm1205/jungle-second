import React from "react";
import { lounge1, lounge2, lounge3, lounge4 } from "~/public/images";
import { BackgroundImage, Box } from "~/components/atoms";
import SwipeableViews from "react-swipeable-views";
import { theme } from "~/theme";

export const ImageGallery: React.FC = () => {
  return (
    <SwipeableViews>
      <Box paddingX={theme.space.m}>
        <BackgroundImage
          image={lounge1}
          size={{ width: "100%", height: "230px" }}
        />
      </Box>

      <Box paddingX={theme.space.m}>
        <BackgroundImage
          image={lounge2}
          size={{ width: "100%", height: "230px" }}
        />
      </Box>

      <Box paddingX={theme.space.m}>
        <BackgroundImage
          image={lounge3}
          size={{ width: "100%", height: "230px" }}
        />
      </Box>

      <Box paddingX={theme.space.m}>
        <BackgroundImage
          image={lounge4}
          size={{ width: "100%", height: "230px" }}
        />
      </Box>
    </SwipeableViews>
  );
};
