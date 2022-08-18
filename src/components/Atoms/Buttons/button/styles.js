import palette from '_utils/palette'

const { makeStyles } = require('@material-ui/styles')

export default makeStyles(theme => ({
  hidden: {
    opacity: 0,
  },
  loading: {
    position: 'absolute',
  },
  button: {
    opacity: 1,
    height: 48,
    borderRadius: 24,
    fontSize: 14,
    fontWeight: 600,
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: palette.custom['purple-heart'],
    color: 'white',
    padding: theme.spacing(2, 3),
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: palette.custom['purple-heart'],
    },
  },
  primary: {
    padding: theme.spacing(1.25, 3),
    height: 40,
    borderRadius: 24,
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: palette.primary.main,
    },
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    padding: theme.spacing(1, 2),
    backgroundColor: 'transparent',
    color: palette.primary.main,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  outlined: {
    backgroundColor: 'white',
    border: `0.1rem solid ${palette.custom.iron}`,
    color: palette.custom['orange-soda'],
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))
