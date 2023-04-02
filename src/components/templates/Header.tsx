import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Box } from '~/components/atoms';
import { MenuButton, SideMenu } from '~/components/molecules';
import { theme } from '~/theme';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <FixWrapper>
        <Box display="flex" justifyContent="right" alignItems="center">
          <MenuButton onClick={onOpen} />
        </Box>
      </FixWrapper>
      <SideMenu isDisplay={open} onClose={onClose} />
    </>
  );
};

const FixWrapper = styled.div`
  position: fixed;
  top: 0;
  height: ${theme.space.xl};
  width: 100%;
  background-color: rgba(${theme.background.color.mainRGB}, 0.9);

  /* swipeable-imageより前面に出すために必要 */
  transform: translate3d(0px, 0px, 0px);
  z-index: 1;
`;
