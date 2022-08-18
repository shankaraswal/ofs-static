import { makeStyles } from '@material-ui/styles'

import palette from '_utils/palette'

const getBoxShadow = color => `0px 2px 4px ${color}3d`

export default makeStyles(theme => ({
  container: {
    margin: 0,
    padding: theme.spacing(0.7, 1.7),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.custom.aluminium,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.7, 1),
    },
  },
  containerFloat: {
    borderRadius: 4,
    boxShadow: getBoxShadow(palette.custom.aluminium),
  },
  message: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
    marginRight: theme.spacing(0.5),
  },
  button: {
    border: 'none',
    background: 'transparent',
  },
  icon: {
    fill: 'white',
    width: 16,
    height: 16,
    margin: theme.spacing(1.5),
  },
  /* Themes */
  success: {
    backgroundColor: palette.custom['green-haze'],
    boxShadow: ({ isFloat }) => (isFloat ? getBoxShadow(palette.custom['green-haze']) : 'none'),
  },
  error: {
    backgroundColor: palette.custom['alizarin-crimson'],
    boxShadow: ({ isFloat }) =>
      isFloat ? getBoxShadow(palette.custom['alizarin-crimson']) : 'none',
  },
}))
