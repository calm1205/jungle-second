import React, { ReactNode } from 'react';
import { theme } from '~/theme';
import { lounge1 } from '~/public/images';
import { BackgroundImage, Box, MainTitle } from '~/components/atoms';
import { Tabs } from '~/components/molecules';
import { Cast, Employee, Staff } from '~/components/organisms';
import { MainLayout } from '~/components/templates';
import { useParams } from 'react-router-dom';

const TAB_KEYS = ['cast', 'employee', 'staff'] as const;
type TabKeys = typeof TAB_KEYS[number];
type TabContents = { [key in TabKeys]: ReactNode };

const tabContents: TabContents = {
  cast: <Cast />,
  employee: <Employee />,
  staff: <Staff />,
};

const Recruit: React.FC = () => {
  const { recruitId } = useParams();
  const recruitIdFromUrl = (recruitId || 'cast') as TabKeys;

  return (
    <MainLayout>
      <BackgroundImage image={lounge1} size={{ height: '220px' }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="70px"
        >
          <MainTitle>Recruit</MainTitle>
        </Box>
      </BackgroundImage>

      <Box marginTop={theme.space.l}>
        <Tabs tabs={['cast', 'employee', 'staff']} />
        {tabContents[recruitIdFromUrl]}
      </Box>
    </MainLayout>
  );
};

export default Recruit;
