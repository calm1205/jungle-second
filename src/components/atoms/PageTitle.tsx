import React from "react";
import styled from "styled-components";

type PageTitleProps = {
  title: string;
};

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <PageTitleStyle>{title}</PageTitleStyle>;
};

const PageTitleStyle = styled.h1`
  font-size: 5rem;
`;
