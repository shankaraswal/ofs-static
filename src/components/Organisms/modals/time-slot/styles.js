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
    minWidth: 552,
    maxWidth: 900,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      minWidth: '100%',
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
  arrowIcon: {
    width: 18,
    height: 18,
  },
  icon: {
    width: 12,
    height: 12,
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
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1, 0),
    },
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
    padding: theme.spacing(2),
    margin: theme.spacing(0, 0, 1, 0),
    position: 'relative',
  },
  checked: {
    border: `2px solid ${palette.custom['orange-soda']}`,
  },
  radioButton: {
    position: 'absolute',
    right: theme.spacing(1),
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
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.4,
    color: palette.custom.abbey,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: theme.spacing(3),
    color: palette.custom.jumbo,
  },
  weekDaysHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: palette.custom.abbey,
  },
  weekDay: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(2),
    color: palette.custom.abbey,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 40,
      padding: 0,
    },
  },
  weekDaysTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'none',
    color: palette.custom.jumbo,
    transition: 'color 0.4s',
    width: 'inherits',
  },
  dayNumber: {
    fontWeight: 400,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignSelf: 'center',
    lineHeight: '40px',
    color: palette.custom.abbey,
    transition: 'background-color 0.4s',
  },
  weekDayDisabled: {
    color: palette.custom.aluminium,
  },
  dayLabelSelected: {
    color: palette.primary.main,
  },
  dayNumberSelected: {
    fontWeight: 600,

    backgroundColor: palette.primary.main,
    color: 'white',
  },

  slotsList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  slotListTitle: {
    ...theme.typography.subtitle2,
    fontWeight: 600,
  },
  itemTitle: {
    color: palette.custom.abbey,
    fontWeight: 400,
    paddingLeft: theme.spacing(2),
  },
  itemThumbnail: {
    width: 32,
    height: 32,
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
