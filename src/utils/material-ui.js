import { createMuiTheme } from '@material-ui/core/styles'

import palette from './palette'

const defaultTheme = createMuiTheme()

export const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: 'Averta, sans-serif',
  },
  overrides: {
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: 'white',
      },
    },
    MuiPickersToolbar: {
      root: {
        backgroundColor: 'white',
        color: palette.custom.abbey,
        '& .MuiPickersToolbarText-root': {
          color: palette.custom['storm-gray'],
          '&.Mui-selected': {
            color: palette.custom.shark,
          },
        },
      },
    },

    MuiPickersModalDialog: {
      dialogRoot: {
        borderRadius: 8,
        boxShadow: '0px 0.5px 5px rgba(0, 0, 0, 0.039), 0px 3.75px 11px rgba(0, 0, 0, 0.19)',
        [defaultTheme.breakpoints.down('sm')]: {
          minWidth: '100%',
          minHeight: '80%',
          position: 'fixed',
          padding: 0,
          margin: 0,
          bottom: 0,
        },
      },
    },
    MuiSvgIcon: {
      root: {
        width: 16,
        height: 16,
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 16,
      },
    },
    MuiTextField: {
      root: {
        margin: '12px 0px 12px',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: 16,
        marginLeft: 16,
      },
      root: {
        fontSize: 16,
      },
    },
  },
})
