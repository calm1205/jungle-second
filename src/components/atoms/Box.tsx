import { CSSProperties, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type BoxStyle = {
  marginX?: string
  marginY?: string
  paddingX?: string
  paddingY?: string
  onClick?: () => void
} & Pick<
  CSSProperties,
  | 'width'
  | 'height'
  | 'margin'
  | 'marginTop'
  | 'marginLeft'
  | 'marginRight'
  | 'marginBottom'
  | 'padding'
  | 'paddingTop'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingBottom'
  | 'display'
  | 'justifyContent'
  | 'flexDirection'
  | 'alignItems'
  | 'textAlign'
  | 'gap'
>

type TransientProps = {
  [P in keyof BoxStyle as `$${string & P}`]: BoxStyle[P]
}
type Box = PropsWithChildren<TransientProps>

/**
 * コンポーネント同士の空間制御
 */
export const Box: React.FC<Box> = (props) => {
  const { children, ...styles } = props
  return <Div {...styles}>{children}</Div>
}

const Div = styled.div<TransientProps>`
  ${(styles) => css`
    width: ${styles.$width};
    height: ${styles.$height ?? '100%'};

    margin: ${styles.$margin};
    margin-top: ${styles.$marginTop};
    margin-left: ${styles.$marginLeft};
    margin-right: ${styles.$marginRight};
    margin-bottom: ${styles.$marginBottom};
    margin: ${styles.$marginX && `0 ${styles.$marginX}`};
    margin: ${styles.$marginY && `${styles.$marginY} 0`};

    padding: ${styles.$padding};
    padding-top: ${styles.$paddingTop};
    padding-left: ${styles.$paddingLeft};
    padding-right: ${styles.$paddingRight};
    padding-bottom: ${styles.$paddingBottom};
    padding: ${styles.$paddingX && `0 ${styles.$paddingX}`};
    padding: ${styles.$paddingY && `${styles.$paddingY} 0`};

    gap: ${styles.$gap};

    display: ${styles.$display};
    justify-content: ${styles.$justifyContent};
    flex-direction: ${styles.$flexDirection};
    align-items: ${styles.$alignItems};
    text-align: ${styles.$textAlign};
  `}
`
