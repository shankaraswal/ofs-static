//import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';

const themeColors = createMuiTheme({
    white: {
      main: "#FFFFFF",
    },
    /*black: {
      light: "#12263F",
      main: "#000000",
    },*/
    transparent: {
      main: "transparent",
    },
    gray: {
      0: "#EDEEEE",
      3: "#F8F9F9",
      8: "#EDEEEE",
      12: "#E4E4E5",
      16: "#DBDBDC",
      40: "#A5A6A8",
      56: "#818285",
      64: "#6F7074",
      80: "#4B4D51",
      100: "#1E2026",
    },

    blue: {
      lightest: "#E7F4FF",
      light: "#58B4FF",
      base: "#1094FF",
      dark: "#0B68B3",
      darkest: "#052C4C",
    },
    green: {
      lightest: "#E6F7EC",
      light: "#4DC57B",
      base: "#00AC43",
      dark: "#00782F",
      darkest: "#003414",
    },
    yellow: {
      lightest: "#FFF6E8",
      light: "#FCC15F",
      base: "#FBA61A",
      dark: "#B07412",
      darkest: "#4B3208",
    },
    orange: {
      lightest: "#FDF1E6",
      light: "#EE9F51",
      base: "#E67607",
      dark: "#A15305",
      darkest: "#452302",
    },
    red: {
      lightest: "#FDE9E9",
      light: "#EF6363",
      base: "#E82020",
      dark: "#A21616",
      darkest: "#460A0A",
    },

    primary: {
      lightest: "#F0ECF9",
      light: "#947DD4",
      base: "#6645C1",
      dark: "#473087",
      darkest: "#1F153A",
    },
    secondary: {
      lightest: "#FEF0EC",
      light: "#F9957C",
      base: "#F76744",
      dark: "#AD4830",
      darkest: "#4A1F14",
    },
    success: {
      main: "#003414",
    },
  });
  
  export default themeColors;
  