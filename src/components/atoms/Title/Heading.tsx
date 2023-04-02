import styled from 'styled-components';
import { theme } from '~/theme';

type Heading = {
  text: string;
};

export const Heading: React.FC<Heading> = ({ text }) => {
  return <HeadingStyle>{text}</HeadingStyle>;
};

const HeadingStyle = styled.h3`
  font-size: 1.7rem;
  line-height: 3rem;

  border-left: 5px solid ${theme.color.main};
  padding-left: ${theme.space.xs};
`;
