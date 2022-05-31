import React from 'react';
import styled from 'styled-components';
import { Box } from '../atoms';

export type FeeLiType = {
  name: string;
  value: string;
};

/**
 * 料金のリストの1パーツ
 */
export const FeeLi: React.FC<FeeLiType> = ({ name, value }) => {
  return (
    <FeeLiStyle>
      <Box display="flex" justifyContent="space-between">
        <span>{name}</span>
        <span>{value}</span>
      </Box>
    </FeeLiStyle>
  );
};

const FeeLiStyle = styled.li`
  list-style: none;
  font-size: 1.7rem;
`;
