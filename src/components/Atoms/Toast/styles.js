import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  toastContainer: {
    zIndex: 99999,
    padding: 0,
    margin: 0,
    position: 'fixed',
    top: theme.spacing(3),
    width: 350,
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(0),
      width: '100%',
    },
  },
  toastContent: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: 0,
    margin: 0,
    fontFamily: 'Barlow, sans-serif',
    cursor: 'default',
  },
}))
