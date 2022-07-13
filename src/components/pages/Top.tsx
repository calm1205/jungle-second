import React from 'react';
import {
  Concept,
  System,
  RecruitPreviews,
  Access,
  Contact,
} from '~/components/organisms';
import { MainLayout } from '~/components/templates';

const Top: React.FC = () => {
  return (
    <MainLayout>
      <Concept />
      <System />
      <RecruitPreviews />
      <Access />
      <Contact />
    </MainLayout>
  );
};

export default Top;
