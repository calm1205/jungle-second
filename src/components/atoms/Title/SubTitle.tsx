import React from "react";
import styled, { css } from "styled-components";

type SubTitleType = {
  text: string;
};

/**
 * カテゴリの中でのタイトル
 */
export const SubTitle: React.FC<SubTitleType> = ({ text }) => {
  return <H3 children={text} />;
};

const H3 = styled.h3`
  ${({ theme }) => css`
    font-size: 2.5rem;
    letter-spacing: ${theme.font.letterSpacing.paragraph};
  `}
`;
