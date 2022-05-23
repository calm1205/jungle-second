import React from "react";
import styled from "styled-components";
import { Box, SubTitle, CloseButton } from "~/components/atoms";

type SideMenuType = {
  isDisplay: boolean;
  onClose: () => void;
};

export const SideMenu: React.FC<SideMenuType> = ({
  isDisplay = false,
  onClose,
}) => {
  return (
    <FixWrapper isDisplay={isDisplay}>
      <Box display="flex" justifyContent="right" height="70px">
        <Box padding="20px">
          <CloseButton />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="calc(100vh - 70px)"
        paddingTop="calc(25vh - 70px)"
        paddingBottom="25vh"
      >
        <SubTitle text="Home" />
        <SubTitle text="System" />
        <SubTitle text="Recruit" />
        <SubTitle text="Access" />
        <SubTitle text="Contact" />
      </Box>
    </FixWrapper>
  );
};

const FixWrapper = styled.div<Pick<SideMenuType, "isDisplay">>`
  display: ${(props) => (props.isDisplay ? "block" : "none")};

  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: white;

  /* swipeable-imageより前面に出すために必要 */
  transform: translate3d(0px, 0px, 0px);
  z-index: 2;
`;
