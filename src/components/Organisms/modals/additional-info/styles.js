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
    width: 552,
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
    textAlign: 'center',
  },
  dialogContent: {
    padding: theme.spacing(4, 4, 0),
    display: 'grid',
  },
  optionTitle: {
    color: palette.custom.abbey,
    fontSize: 14,
    fontWeight: 600,
  },
  optionSubtitle: {
    color: palette.custom.abbey,
    fontSize: 14,
    fontWeight: 400,
  },
  datePicker: {
    input: { color: 'red' },
  },
  datePickerIcon: {
    width: 24,
    height: 24,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    color: palette.custom.abbey,
    margin: theme.spacing(1),
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
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
  addressDetail: {
    padding: theme.spacing(3),
    borderRadius: 4,
    backgroundColor: palette.custom['black-haze'],
    display: 'grid',
    gridRowGap: 0,
    gridColumnGap: theme.spacing(3),
    gridTemplateAreas: `
      'unit unit unit streetNumber'
      'streetName streetName streetName streetName'
      'city city state state'
      'country country country postal'
    `,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  addressUnit: { gridArea: 'unit' },
  addressStreetNumber: { gridArea: 'streetNumber' },
  addressStreetName: { gridArea: 'streetName' },
  addressCity: { gridArea: 'city' },
  addressState: { gridArea: 'state' },
  addressCountry: { gridArea: 'country' },
  addressPostal: { gridArea: 'postal' },
}))
