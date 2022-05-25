import React from "react";
import styled, { css } from "styled-components";

type TitleType = {
  text: string;
};

/**
 * カテゴリ毎のタイトル
 */
export const Title: React.FC<TitleType> = ({ text }) => {
  return <H2 children={text} />;
};

const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    white-space: pre-wrap;
    letter-spacing: ${theme.font.letterSpacing.title};
    line-height: 4rem;
  `}
`;
