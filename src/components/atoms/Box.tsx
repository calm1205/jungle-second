import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import * as CSS from "csstype";

type BoxType = {
  children?: ReactNode;
} & Pick<
  CSS.Properties,
  | "height"
  | "margin"
  | "marginTop"
  | "marginLeft"
  | "marginRight"
  | "marginBottom"
  | "padding"
  | "paddingTop"
  | "paddingLeft"
  | "paddingRight"
  | "paddingBottom"
  | "display"
  | "justifyContent"
  | "flexDirection"
  | "alignItems"
  | "textAlign"
>;

/**
 * コンポーネント同士の空間制御
 */
export const Box: React.FC<BoxType> = (props) => {
  const { children, ...styles } = props;
  return <Div {...styles}>{children}</Div>;
};

const Div = styled.div<CSS.Properties>`
  ${(styles) => css`
    height: ${styles.height ?? "100%"};

    margin: ${styles.margin};
    margin-top: ${styles.marginTop};
    margin-left: ${styles.marginLeft};
    margin-right: ${styles.marginRight};
    margin-bottom: ${styles.marginBottom};

    padding: ${styles.padding};
    padding-top: ${styles.paddingTop};
    padding-left: ${styles.paddingLeft};
    padding-right: ${styles.paddingRight};
    padding-bottom: ${styles.paddingBottom};

    display: ${styles.display};
    justify-content: ${styles.justifyContent};
    flex-direction: ${styles.flexDirection};
    align-items: ${styles.alignItems};
    text-align: ${styles.textAlign};
  `}
`;
