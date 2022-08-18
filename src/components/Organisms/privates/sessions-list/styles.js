import palette from '_utils/palette'

const { makeStyles } = require('@material-ui/styles')

export default makeStyles(theme => ({
  link: {
    color: palette.custom['orange-soda'],
  },
  text: {
    fontSize: '1.4rem',
    fontWeight: 400,
  },
  description: {
    color: palette.custom['storm-gray'],
    marginBottom: theme.spacing(3),
  },
  card: {
    display: 'grid',
    gridTemplateAreas: `
    'title description button'
    'info description button'`,
    gridColumnGap: theme.spacing(5),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    color: palette.custom.abbey,
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: `
      'title button'
      'info button'
      'description button'`,
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateAreas: `
      'title title'
      'info info'
      'description description'
      'button .'`,
    },
  },
  cardTitle: {
    gridArea: 'title',
    lineHeight: 1.4,
    marginBottom: theme.spacing(1),
  },
  cardInfo: {
    gridArea: 'info',
    lineHeight: 1.4,
    marginBottom: theme.spacing(1.5),
    color: palette.custom['storm-gray'],
  },
  cardDescription: {
    gridArea: 'description',
    lineHeight: 1.4,
  },
  cardButton: {
    gridArea: 'button',
  },
}))
