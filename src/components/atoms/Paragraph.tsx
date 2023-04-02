import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '~/theme';

type Paragraph = {
  text: string;
  /** theme.spaceを推奨 */
  marginTop?: string;
};

export const Paragraph: React.FC<Paragraph> = ({
  text,
  marginTop = theme.space.s,
}) => {
  return <P marginTop={marginTop}>{text}</P>;
};

const P = styled.p<Pick<Paragraph, 'marginTop'>>`
  ${({ theme, marginTop }) => css`
    font-size: 1.7rem;
    color: ${theme.font.color.default};
    letter-spacing: ${theme.font.letterSpacing.paragraph};
    line-height: 2rem;
    white-space: pre-wrap;

    margin-top: ${marginTop};
  `}
`;
