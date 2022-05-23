const SPACE_UNIT = 8;

/**
 * cssの共通テンプレート
 */
export const theme = {
  /**
   * フォント
   */
  font: {
    family: {
      default: "serif",
      secondary: "sans-serif",
      crusive: "Tangerine",
    },
    color: {
      default: "#313131",
      secondary: "#eeeeee",
      error: "#FF3333",
    },
    letterSpacing: {
      mainTitle: "8px",
      title: "4px",
      paragraph: "2px",
    },
  },

  /**
   * 区切り線
   */
  hr: {
    color: "#404040",
  },

  /**
   * 背景
   */
  background: {
    color: {
      main: "#f3eee7",
      mainRGB: "243,238,231",
      secondary: "white",
    },
  },

  /**
   * ボタン
   */
  button: {
    main: {
      color: "#eeeeee",
      bg: "#404040",
    },
  },

  /**
   * フォーム
   */
  input: {
    border: {
      color: {
        default: "#dad9d6",
      },
    },
  },

  /**
   * 余白
   */
  space: {
    /** 単位 x 1 */
    xs: `${SPACE_UNIT}px`,
    /** 単位 x 2 */
    s: `${SPACE_UNIT * 2}px`,
    /** 単位 x 3 */
    m: `${SPACE_UNIT * 3}px`,
    /** 単位 x 5 */
    l: `${SPACE_UNIT * 5}px`,
    /** 単位 x 8 */
    xl: `${SPACE_UNIT * 8}px`,
    /** 単位 x 13 */
    xxl: `${SPACE_UNIT * 13}px`,
    /** 単位 x 21 */
    xxxl: `${SPACE_UNIT * 21}px`,
  },
};
