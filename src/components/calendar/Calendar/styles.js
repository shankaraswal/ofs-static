import { makeStyles } from '@material-ui/core'

import palette from '_utils/palette'

export default makeStyles(theme => ({
  dialogRoot: {
    minHeight: 480,
  },
  dialogContainer: {
    borderRadius: 8,
    boxShadow: '0px 0.5px 5px rgba(0, 0, 0, 0.039), 0px 3.75px 11px rgba(0, 0, 0, 0.19)',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 626,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      position: 'absolute',
      bottom: theme.spacing(0),
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  toolbarTitle: {
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '> .MuiGrid-root': {
      padding: '0 12px',
    },
  },
  toolbarContent: {
    '&:first-child': {
      fontSize: 16,
      fontWeight: 600,
      color: palette.custom.abbey,
      margin: theme.spacing(1, 0, 1, 2),
      textTransform: 'none',
    },
    '&:last-child': {
      margin: theme.spacing(1, 2, 1, 0),
      textTransform: 'none',
    },
  },
  picker: {
    '& .MuiPickersDesktopDateRangeCalendar-rangeCalendarContainer': {
      borderRight: 'none',
    },
  },
  mobile: {
    '& .MuiToolbar-gutters': {
      padding: 0,
    },
    '& .MuiPickersToolbar-dateTitleContainer': {
      paddingLeft: 16,
    },
    '& .MuiToolbar-root > .MuiTypography-overline': {
      width: '100%',
    },
    '& .MuiPickersDateRangePickerInput-root > .MuiGrid-root': {
      /* This enables only the fields inside modal's Portal, when switch view */
      display: 'block',
    },
    '& .MuiPickersArrowSwitcher-previousMonthButtonMargin': {
      marginRight: 0,
    },
    '& .MuiPickersDateRangePickerToolbarProps-penIcon': {
      border: `1px solid ${palette.custom.iron}`,
      position: 'absolute',
      top: 'auto',
      right: theme.spacing(2),
      bottom: theme.spacing(0),
      width: 16,
      height: 16,
      padding: 14,
    },
  },
  input: {
    display: 'none',
  },
  dialogActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      borderTop: `1px solid ${palette.custom.iron}`,
    },
  },
}))
