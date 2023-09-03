import styled from 'styled-components'
import { theme } from '~/theme'

type CloseButton = {
  onClick: () => void
}

export const CloseButton: React.FC<CloseButton> = ({ onClick }) => (
  <CloseButtonStyle onClick={onClick} />
)

const CloseButtonStyle = styled.span`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  padding: 20px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 30px;
    background: ${theme.hr.color};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
