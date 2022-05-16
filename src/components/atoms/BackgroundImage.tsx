import React, { ReactNode } from "react";
import styled from "styled-components";

type BackgroundImageType = {
  image: string;
  size?: {
    width?: string;
    height?: string;
  };
  children?: ReactNode;
};

/**
 * ラップした要素の背景画像
 */
export const BackgroundImage: React.FC<BackgroundImageType> = ({
  image,
  size,
  children,
}) => {
  return (
    <Wrapper image={image} size={size}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<BackgroundImageType>`
  background-size: contain;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;

  width: ${({ size }) => size?.width};
  height: ${({ size }) => size?.height};
`;
