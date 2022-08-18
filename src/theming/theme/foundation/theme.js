// @material-ui/core components
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { createMuiTheme } from '@material-ui/core/styles'
// core components
// import boxShadows from "assets/theme/foundation/box-shadow.js";
// import hexToRgb from "assets/theme/foundation/hex-to-rgb.js";
// import themeColors from "assets/theme/foundation/color.js";

// these are the default styles that go on all headings (h1,h2,h3,h4,h5,h6)
// the difference only consists in the font size and text transform

import themeColors from './color'

const breakpoints = createBreakpoints({})

// A custom theme for this app
const theme = createMuiTheme({
  ...themeColors,
  palette: {
    primary: {
      main: themeColors.primary.base,
    },
    secondary: {
      main: themeColors.secondary.base,
    },
    error: {
      main: themeColors.red.base,
      contrastText: themeColors.white.main,
    },
    success: {
      main: themeColors.primary.base,
      contrastText: themeColors.white.main,
    },
  },
  typography: {
    // htmlFontSize: 20,
    color: themeColors.gray[64],
    h1: {
      fontSize: '24px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '14px',
      fontWeight: 600,
      color: themeColors.gray[64],
      lineHeight: '20px',
    },
    h5: {
      fontSize: '12px',
      fontWeight: 600,
    },
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontSize: '14px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      color: themeColors.gray[64],
    },
    link: {
      color: themeColors.gray[64],
    },
    caption: {},
    overline: {},
    button: {
      fontSize: '14px',
      borderRadius: '24px',
      borderWidth: '2px',
    },
  },
  // Theme style overrides
  overrides: {
    // MUI Buttons
    MuiButton: {
      root: {
        position: 'relative',
        textTransform: 'none',
        transition: 'all .15s ease',
        // letterSpacing: ".025em",
        // fontSize: ".875rem",
        padding: '14px 24px',
        willChange: 'transform',
        border: '2px solid transparent',
        // lineHeight: "20px",
        borderRadius: '24px',
        userSelect: 'none',
        display: 'inline-block',
        fontWeight: '600',
        textAlign: 'center',
        verticalAlign: 'middle',
        '&:hover': {
          // transform: "translateY(-1px)",
          boxShadow: themeColors.transparent.main,
        },
      },
      text: {
        border: 0,
        display: 'flex',
        marginTop: '5px',

        '&:hover': {
          backgroundColor: themeColors.transparent.main,
        },
      },
      containedSizeSmall: {
        borderRadius: '24px',
        padding: '14px 24px',
        borderWidth: '2px',
      },
      containedSizeLarge: {
        borderRadius: '24px',
        padding: '14px 24px',
        borderWidth: '2px',
      },
      outlinedPrimary: {
        borderRadius: '24px',
        padding: '14px 24px',
        borderWidth: '2px',
        '&:hover': {
          // transform: "translateY(-1px)",
          borderWidth: '2px',
        },
      },
      outlinedSizeSmall: {
        borderRadius: '24px',
        padding: '14px 24px',
        borderWidth: '2px',
      },
      outlinedSizeLarge: {
        borderRadius: '24px',
        padding: '14px 24px',
        borderWidth: '2px',
      },
    },

    // MUI Dialogs
    MuiDialog: {
      paper: {
        width: '522px',
        borderRadius: '8px',
        [breakpoints.down('xl')]: {
          margin: 0,
        },
      },
    },
    MuiDialogContent: {
      root: {
        position: 'relative',
        padding: '1.5rem',
        flex: '1 1 auto',
        // overflowY: "visible",
        height: '100%',
        '&::-webkit-scrollbar': {
          width: '4px',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '2px',
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '2px',
          backgroundColor: 'rgba(0,0,0,.2)',
          outline: '1px solid white',
        },
      },
    },
    MuiDialogActions: {
      root: {
        display: 'flex',
        padding: '24px 32px',
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        [breakpoints.down('xs')]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },

    MuiCheckbox: {
      root: {
        '& .MuiSvgIcon-root': {
          width: '1.5rem',
          height: '1.5rem',
        },
      },
    },
  },
})

export default theme
