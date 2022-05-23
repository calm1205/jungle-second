import React from "react";
import styled from "styled-components";
import { Box } from "~/components/atoms";
import { Menu } from "~/components/molecules";
import { theme } from "~/theme";

export const Header: React.FC = () => {
  return (
    <FixWrapper>
      <Box display="flex" justifyContent="right" alignItems="center">
        <Menu onClick={() => {}} />
      </Box>
    </FixWrapper>
  );
};

const FixWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: rgba(${theme.background.color.mainRGB}, 0.9);

  /* swipeable-imageより前面に出すために必要 */
  transform: translate3d(0px, 0px, 0px);
  z-index: 1;
`;
