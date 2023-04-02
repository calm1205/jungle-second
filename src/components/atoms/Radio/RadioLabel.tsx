import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '~/theme';

type RadioLabel = {
  text: string;
  children: ReactNode;
};

/**
 * ラジオボタンのラベル
 */
export const RadioLabel: React.FC<RadioLabel> = ({ text, children }) => {
  return (
    <StyledRadioLabel>
      {children} <TextStyle>{text}</TextStyle>
    </StyledRadioLabel>
  );
};

const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

const TextStyle = styled.span`
  margin-left: 4px;
  margin-right: ${theme.space.s};
`;
