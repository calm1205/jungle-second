import React from "react";
import { BackgroundWhite, Box, Hr, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { FeeSection } from "../molecules/FeeSection";

export const System: React.FC = () => {
  return (
    <BackgroundWhite>
      <Box paddingY={theme.space.xl} textAlign="center">
        <Title text="System" isCrusive />
      </Box>

      <Box paddingX={theme.space.m}>
        <Hr />

        <Box margin={`${theme.space.l} ${theme.space.m}`}>
          <FeeSection
            title="Regular"
            fees={[
              { name: "1set", value: "¥15,000" },
              { name: "additional", value: "¥8,000" },
            ]}
          />
        </Box>

        <Hr />

        <Box margin={`${theme.space.l} ${theme.space.m}`}>
          <FeeSection
            title="Member"
            fees={[
              { name: "1set", value: "¥12,000" },
              { name: "additional", value: "¥6,000" },
            ]}
          />
        </Box>

        <Hr />

        <Box margin={`${theme.space.l} ${theme.space.m}`}>
          <FeeSection
            title="Vip"
            fees={[
              { name: "1set", value: "¥12,000" },
              { name: "additional", value: "¥9,000" },
            ]}
          />
        </Box>

        <Hr />
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </BackgroundWhite>
  );
};
