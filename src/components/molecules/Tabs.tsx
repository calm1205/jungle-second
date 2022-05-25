import React from "react";
import { Box, Tab } from "../atoms";

export const Tabs: React.FC = () => {
  return (
    <Box display="flex" marginTop="30px">
      <Tab text="キャスト" isActive={false} />
      <Tab text="キャスト" isActive={true} />
      <Tab text="キャスト" isActive={false} />
    </Box>
  );
};
