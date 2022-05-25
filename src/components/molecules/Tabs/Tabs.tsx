import React from "react";
import styled from "styled-components";
import { theme } from "~/theme";
import { Box, Tab } from "~/components/atoms";
import { useTabs } from "./useTabs";

const TABS_NAME = ["キャスト", "正社員", "ホールスタッフ"] as const;
const tabLength = TABS_NAME.length;
const initialActiveIndex = 0;

export const Tabs: React.FC = () => {
  const tabs = useTabs(tabLength, initialActiveIndex);

  return (
    <Box display="flex" marginTop="30px">
      <Edge />
      {tabs.map((tab, index) => {
        return (
          <Tab
            text={TABS_NAME[index]}
            isActive={tab.isActive}
            onClick={tab.onClick}
          />
        );
      })}
      <Edge />
    </Box>
  );
};

/**
 * タブの両端
 */
const Edge = styled.div`
  width: ${theme.space.xl};
  border-bottom: 2px solid ${theme.color.main};
`;
