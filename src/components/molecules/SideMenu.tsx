import styled from 'styled-components'
import { Box, SubTitle, CloseButton } from '~/components/atoms'

type SideMenu = {
  isDisplay: boolean
  onClose: () => void
}

export const SideMenu: React.FC<SideMenu> = ({
  isDisplay = false,
  onClose,
}) => (
  <FixWrapper isDisplay={isDisplay}>
    <Box display="flex" justifyContent="right" height="70px">
      <Box padding="20px">
        <CloseButton onClick={onClose} />
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
      <a href="/#home" onClick={onClose}>
        <SubTitle text="Home" />
      </a>

      <a href="/#system" onClick={onClose}>
        <SubTitle text="System" />
      </a>

      <a href="/#recruit" onClick={onClose}>
        <SubTitle text="Recruit" />
      </a>

      <a href="/#access" onClick={onClose}>
        <SubTitle text="Access" />
      </a>

      <a href="/#contact" onClick={onClose}>
        <SubTitle text="Contact" />
      </a>
    </Box>
  </FixWrapper>
)

const FixWrapper = styled.div<Pick<SideMenu, 'isDisplay'>>`
  display: ${(props) => (props.isDisplay ? 'block' : 'none')};

  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: white;

  /* swipeable-imageより前面に出すために必要 */
  transform: translate3d(0px, 0px, 0px);
  z-index: 2;
`
