import React, { ReactNode } from 'react';
import { Box, Tab } from '~/components/atoms';
import { useTabs } from './useTabs';
import { Edge } from './Edge';

type Tab = {
  name: string;
  content: ReactNode;
};
type Props = {
  tabContents: Tab[];
  initialActiveIndex: number;
};

export const Tabs: React.FC<Props> = ({ tabContents, initialActiveIndex }) => {
  const tabLength = tabContents.length;
  const [tabs, tabIndex] = useTabs(tabLength, initialActiveIndex);

  return (
    <>
      <Box display="flex">
        <Edge />
        {tabs.map((t, i) => (
          <Tab
            key={`tab_${i}`}
            text={tabContents[i].name}
            isActive={t.isActive}
            onClick={t.onClick}
          />
        ))}
        <Edge />
      </Box>
      {tabContents[tabIndex].content}
    </>
  );
};
