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
  dialogTitle: {
    padding: theme.spacing(4, 4, 2),
    margin: 'auto',
    maxWidth: 550,
    textAlign: 'center',
  },
  dialogContent: {
    padding: theme.spacing(4, 4, 0),
    display: 'grid',
  },
  illustration: {
    width: 112,
    height: 112,
    margin: 'auto',
  },
  formControl: {
    padding: theme.spacing(5, 0),
  },
  formControlLabel: {
    border: `1px solid ${palette.custom.iron}`,
    borderRadius: 4,
    padding: theme.spacing(1),
    margin: theme.spacing(0, 0, 1, 0),
  },
  checked: {
    border: `2px solid ${palette.custom['orange-soda']}`,
  },
  formControlLabelText: {
    fontSize: 14,
    fontWeight: 400,
  },
  formControlLabelBold: {
    fontSize: 14,
    fontWeight: 600,
    color: palette.custom['orange-soda'],
  },
  dialogActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'normal',
    padding: theme.spacing(4),
  },
  title: {
    margin: 'auto',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.4,
    color: palette.custom.abbey,
    [theme.breakpoints.only('xs')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('sm')]: {
      width: 288,
    },
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
    padding: theme.spacing(3, 1, 0),
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

  firstName: {
    gridArea: 'firstName',
  },
  lastName: {
    gridArea: 'lastName',
  },
  emailAddress: {
    gridArea: 'emailAddress',
  },
  phoneNumber: {
    gridArea: 'phoneNumber',
  },
  password: {
    gridArea: 'password',
  },
  password2: {
    gridArea: 'password2',
  },
}))
