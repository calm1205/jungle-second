import { ReactNode } from 'react';
import styled from 'styled-components';

type BackgroundImage = {
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
export const BackgroundImage: React.FC<BackgroundImage> = ({
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

const Wrapper = styled.div<BackgroundImage>`
  background-size: cover;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;

  width: ${({ size }) => size?.width};
  height: ${({ size }) => size?.height};
`;
