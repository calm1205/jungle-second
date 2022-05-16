import React from "react";
import styled, { css } from "styled-components";

type MainTitleType = {
  text: string;
};

export const MainTitle: React.FC<MainTitleType> = ({ text }) => {
  return <H1>{text}</H1>;
};

const H1 = styled.h1`
  ${({ theme }) =>
    css`
      font-size: 5rem;
      color: ${theme.font.color.secondary};
    `}
`;
