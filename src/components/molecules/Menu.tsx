import React from "react";
import { Box, Line } from "~/components/atoms";

type Menu = {
  onClick: () => void;
};

export const Menu: React.FC<Menu> = ({ onClick }) => {
  return (
    <Box
      width="40px"
      height="35px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding="10px"
      onClick={onClick}
    >
      <Line />
      <Line />
      <Line />
    </Box>
  );
};
