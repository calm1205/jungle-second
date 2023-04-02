import styled from 'styled-components';
import { theme } from '~/theme';
import { Box } from '~/components/atoms';

type Props = {
  /** hrの数 */
  length: number;
  /** 選択されている要素index */
  active: number;
};

/**
 * ImageGalleryの選択中
 */
export const Hrs: React.FC<Props> = ({ length, active }) => {
  const Hrs = [...Array(length)].map((_, i) => {
    if (i === active) return <Active key={`hr_${i}`} />;
    return <InActive key={`hr_${i}`} />;
  });

  return <Box display="flex">{Hrs}</Box>;
};

const InActive = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.inActive};
  margin: 0 ${theme.space.s};
`;

const Active = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.disabled};
  margin: 0 ${theme.space.s};
`;
