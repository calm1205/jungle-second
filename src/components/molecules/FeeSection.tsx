import React from 'react';

import { Box, SubTitle } from '~/components/atoms';
import { FeeLiType, FeeUl } from '~/components/molecules';

type FeeSection = {
  title: string;
  fees: FeeLiType[];
};

/**
 * 料金の1セクション
 */
export const FeeSection: React.FC<FeeSection> = ({ title, fees }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box width="40%" textAlign="center">
        <SubTitle text={title} />
      </Box>

      <Box width="45%">
        <FeeUl lists={fees} />
      </Box>
    </Box>
  );
};
