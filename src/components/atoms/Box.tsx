import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import * as CSS from "csstype";

type BoxType = {
  children?: ReactNode;
  marginX?: string;
  marginY?: string;
  paddingX?: string;
  paddingY?: string;
} & Pick<
  CSS.Properties,
  | "width"
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

const Div = styled.div<Omit<BoxType, "children">>`
  ${(styles) => css`
    width: ${styles.width};
    height: ${styles.height ?? "100%"};

    margin: ${styles.margin};
    margin-top: ${styles.marginTop};
    margin-left: ${styles.marginLeft};
    margin-right: ${styles.marginRight};
    margin-bottom: ${styles.marginBottom};
    margin: ${styles.marginX && `0 ${styles.marginX}`};
    margin: ${styles.marginY && `${styles.marginY} 0`};

    padding: ${styles.padding};
    padding-top: ${styles.paddingTop};
    padding-left: ${styles.paddingLeft};
    padding-right: ${styles.paddingRight};
    padding-bottom: ${styles.paddingBottom};
    padding: ${styles.paddingX && `0 ${styles.paddingX}`};
    padding: ${styles.paddingY && `${styles.paddingY} 0`};

    display: ${styles.display};
    justify-content: ${styles.justifyContent};
    flex-direction: ${styles.flexDirection};
    align-items: ${styles.alignItems};
    text-align: ${styles.textAlign};
  `}
`;
