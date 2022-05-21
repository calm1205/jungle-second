import React from "react";
import styled, { css } from "styled-components";

type TitleType = {
  text: string;
  /**
   * 英語のみ対応
   */
  isCrusive?: boolean;
};

type TitleStyle = Pick<TitleType, "isCrusive">;

/**
 * カテゴリ毎のタイトル
 */
export const Title: React.FC<TitleType> = ({ text, isCrusive }) => {
  return <H2 children={text} isCrusive={isCrusive} />;
};

const H2 = styled.h2<TitleStyle>`
  ${({ theme, isCrusive }) => css`
    font-size: ${isCrusive ? "7rem" : "3rem"};
    font-family: ${isCrusive && theme.font.family.crusive};
    white-space: pre-wrap;
    letter-spacing: ${theme.font.letterSpacing.title};
    line-height: 4rem;
  `}
`;
