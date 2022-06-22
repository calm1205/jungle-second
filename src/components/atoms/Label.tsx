import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Label = {
  text: string;
  children: ReactNode;
};

/**
 * フォームのラベル
 */
export const Label: React.FC<Label> = ({ text, children }) => {
  return (
    <StyledLabel>
      <p>{text}</p>
      {children}
    </StyledLabel>
  );
};

export const StyledLabel = styled.label`
  display: block;
  text-align: left;
`;
