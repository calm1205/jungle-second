import React from 'react';
import styled, { css } from 'styled-components';

type Title = {
  text: string;
};

/**
 * カテゴリ毎のタイトル
 */
export const Title: React.FC<Title> = ({ text }) => {
  return <H2>{text}</H2>;
};

const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    white-space: pre-wrap;
    letter-spacing: ${theme.font.letterSpacing.title};
    line-height: 4rem;
  `}
`;
