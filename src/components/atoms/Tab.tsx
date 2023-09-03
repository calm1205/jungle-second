import styled from 'styled-components'
import { theme } from '~/theme'

type Tab = {
  text: string;
  isActive: boolean;
  onClick?: () => void;
};

/**
 * Tabの最小単位 - Tabsでラップして活用
 */
export const Tab: React.FC<Tab> = ({ text, isActive, onClick }) => {
  const ReturnTab = isActive ? ActiveTab : InActiveTab
  return <ReturnTab onClick={onClick}>{text}</ReturnTab>
}

const TabStyle = styled.div`
  width: 100%;
  letter-spacing: 1px;
  text-align: center;
  padding-top: ${theme.space.s};
  padding-bottom: ${theme.space.s};
`

const InActiveTab = styled(TabStyle)`
  color: gray;
  font-size: 1.5rem;
  border-bottom: 2px solid ${theme.color.main};
`

const ActiveTab = styled(TabStyle)`
  font-size: 1.7rem;
  border: 2px solid ${theme.color.main};
  border-bottom: none;
`
