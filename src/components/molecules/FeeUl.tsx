import React from "react";
import styled, { css } from "styled-components";
import { FeeLi, FeeLiType } from "~/components/molecules";

export type FeeUlType = {
  lists: FeeLiType[];
};

/**
 * 料金のリスト表示
 */
export const FeeUl: React.FC<FeeUlType> = ({ lists }) => {
  return (
    <FeeUlStyle>
      {lists.map((l) => {
        return <FeeLi name={l.name} value={l.value} key={l.name} />;
      })}
    </FeeUlStyle>
  );
};

const FeeUlStyle = styled.ul`
  ${({ theme }) => css`
    & {
      li {
        margin-top: ${theme.space.xs};
      }
      li:first-child {
        margin: 0;
      }
    }
  `}
`;
