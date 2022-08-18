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
  topActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2.5, 4),
  },
  actionButton: {
    fontSize: 14,
  },
  dialogTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    padding: theme.spacing(2.5),
    margin: theme.spacing(0, 0, 1, 0),
    position: 'relative',
  },
  checked: {
    border: `2px solid ${palette.custom['orange-soda']}`,
  },
  radioButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
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
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: palette.custom.abbey,
    [theme.breakpoints.only('xs')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: theme.spacing(3),
    color: palette.custom.jumbo,
  },
  itemTitle: {
    color: palette.custom.abbey,
    fontWeight: 600,
  },
  itemTitleSelected: {
    color: palette.custom['orange-soda'],
  },
  itemCost: {
    marginTop: theme.spacing(0.5),
    color: palette.custom['storm-gray'],
  },
  itemDescription: {
    marginTop: theme.spacing(2),
    color: palette.custom.abbey,
  },
}))
