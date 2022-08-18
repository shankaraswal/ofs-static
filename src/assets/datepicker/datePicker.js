import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2, 2),
      color: theme.palette.text.secondary,
    },
  }));
export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-01-01T00:01:00'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
      <Grid container spacing="0">
        <Grid item xs={4} className={classes.paper}>
            <KeyboardDatePicker
            disableToolbar
            color="secondary"
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </Grid>
        <Grid item xs={4} className={classes.paper}>
            <KeyboardTimePicker
            color="secondary"
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change time',
            }}
            />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}