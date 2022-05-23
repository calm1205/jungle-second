import React from "react";
import styled, { css } from "styled-components";

type SubTitleType = {
  text: string;
  /**
   * 英語のみ対応
   */
  isCrusive?: boolean;
};

/**
 * カテゴリの中でのタイトル
 */
export const SubTitle: React.FC<SubTitleType> = ({ text, isCrusive }) => {
  return <H3 children={text} isCrusive={isCrusive} />;
};

type SubTitleStyle = Pick<SubTitleType, "isCrusive">;
const H3 = styled.h3<SubTitleStyle>`
  ${({ theme, isCrusive }) => css`
    font-size: ${isCrusive ? "3rem" : "2.5rem"};
    font-family: ${isCrusive && theme.font.family.crusive};
    letter-spacing: ${theme.font.letterSpacing.paragraph};
  `}
`;
