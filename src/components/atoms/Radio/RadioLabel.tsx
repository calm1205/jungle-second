import React, { ReactNode } from 'react';
import styled from 'styled-components';

type RadioLabelType = {
  text: string;
  children: ReactNode;
};

/**
 * ラジオボタンのラベル
 */
export const RadioLabel: React.FC<RadioLabelType> = ({ text, children }) => {
  return (
    <StyledRadioLabel>
      {children} <span>{text}</span>
    </StyledRadioLabel>
  );
};

const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
  span {
    margin-left: 4px;
  }
`;
