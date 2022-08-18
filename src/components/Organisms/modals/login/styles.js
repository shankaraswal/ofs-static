import { makeStyles } from '@material-ui/styles'

import palette from '_utils/palette'

export default makeStyles(theme => ({
  dialogRoot: {
    minHeight: 480,
  },
  dialogContainer: {
    borderRadius: 8,
    boxShadow: '0px 1px 4px rgba(30, 32, 38, 0.16)',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 900,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      position: 'absolute',
      bottom: theme.spacing(0),
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  dialogTitle: { padding: 0 },
  dialogContent: { padding: 0 },
  dialogActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    padding: 0,
  },
  textField: {
    '& *.MuiSvgIcon-root': {
      color: palette.custom.jumbo,
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 2,
    color: palette.custom.abbey,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    maxWidth: 272,
    color: palette.custom['storm-gray'],
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
  link: {
    lineHeight: 2,
    fontSize: 14,
    color: palette.custom['storm-gray'],
    '&:hover': {
      textDecoration: 'none',
    },
  },
  bold: {
    fontWeight: 600,
    color: palette.custom['orange-soda'],
  },
  logIn: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 2),
    },
  },
  signUp: {
    padding: theme.spacing(4),
    backgroundColor: palette.custom['black-haze'],
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 2),
    },
  },
}))
