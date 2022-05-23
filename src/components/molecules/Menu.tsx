import React from "react";
import { Box, Line } from "~/components/atoms";

type Menu = {
  onClick: () => void;
};

export const Menu: React.FC<Menu> = ({ onClick }) => {
  return (
    <Box
      width="70px"
      height="70px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding="26px 24px"
      onClick={onClick}
    >
      <Line />
      <Line />
      <Line />
    </Box>
  );
};
