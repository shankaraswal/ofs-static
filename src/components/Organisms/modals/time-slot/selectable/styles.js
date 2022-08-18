import { makeStyles } from '@material-ui/styles'

import palette from '_utils/palette'

export default makeStyles(theme => ({
  button: {
    backgroundColor: 'white',
    color: palette.custom.abbey,
    padding: theme.spacing(0.5, 2),
    textTransform: 'none',
    fontWeight: 600,
    margin: 4,
    width: 100,
    border: `1px solid ${palette.custom.iron}`,
    borderRadius: 4,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: palette.custom['black-haze'],
      border: 'none',
    },
  },
  selected: {
    color: 'white',
    backgroundColor: palette.primary.main,
    border: 'none',
    '&:hover': {
      backgroundColor: palette.primary.main,
    },
  },
}))
