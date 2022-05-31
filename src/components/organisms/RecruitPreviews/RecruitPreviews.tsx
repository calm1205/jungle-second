import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Id, Title } from '~/components/atoms';
import { theme } from '~/theme';
import { RecruitPreview } from './RecruitPreview';
import { recruit1, recruit2, recruit3 } from '~/public/images';

export const RecruitPreviews: React.FC = () => {
  return (
    <>
      <Id id="recruit" />
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="Recruit" />
      </Box>

      <Box padding={theme.space.m}>
        <Link to="/recruit/cast">
          <RecruitPreview title="Cast" text="キャスト" image={recruit1} />
        </Link>
      </Box>

      <Box padding={theme.space.m}>
        <Link to="/recruit/employee">
          <RecruitPreview title="Employee" text="正社員" image={recruit3} />
        </Link>
      </Box>

      <Box padding={theme.space.m}>
        <Link to="/recruit/staff">
          <RecruitPreview
            title="Staff"
            text="ホールスタッフ（アルバイト）"
            image={recruit2}
          />
        </Link>
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </>
  );
};
