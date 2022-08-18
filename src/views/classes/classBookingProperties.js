import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import './classes.scss';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
//import themeColors from '../../assets/theme/foundation/color';

//const preventDefault = (event) => event.preventDefault();
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    //color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  buttonRounded: {
    borderRadius: '4px',
    width: '40px',
    height: '40px',
    minWidth: 'inherit',
    padding: 0,
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3, 2),
  },
}))(MuiDialogActions);

export default function BookingProperties() {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const [openFilter, setOpenFilter] = React.useState(false);
    const handleCloseFilter = () => {
    setOpenFilter(false);
};
const [selectedDate, setSelectedDate] = React.useState(new Date('01-01-2016'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      {/* Class Filters Dialog Modal */}
        <DialogTitle id="class-filters" onClose={handleCloseFilter}>
            {/* <Button aria-label="close" color="secondary" onClick={preventDefault} startIcon={<ChevronLeftRounded />}> */}
                Booking properties
            {/* </Button> */}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h4" align="center" gutterBottom>Shoe size</Typography>
          <Grid container maxWidth="xs" direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>6</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>7</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>8</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>9</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>10</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>11</Button>
            </Grid>
            <Grid item xs={12} spacing={0} />
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>12</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>13</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>14</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>15</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>16</Button>
            </Grid>
            <Grid item spacing={1}>
              <Button variant="outlined" className={classes.buttonRounded}>17</Button>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid xs={12} item align="center">
              <Box mt={5} mb={0}>
                <Typography variant="h4">Birthday</Typography>
              </Box>
              <Box>
              <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.root}>
                <KeyboardDatePicker
                  disableToolbar
                  color="secondary"
                  margin="normal"
                  id="date-picker-dialog"
                  label=""
                  placeholder="select your birthday"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                      'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              </Box>
            </Grid>
          </Grid>
        
          <Grid container spacing={3}>
            <Grid xs={12} item align="center">
              <Box mt={5} mb={2}>
                <Typography variant="h4">Are you injured?</Typography>
              </Box>
              <Box>
              <Grid container maxWidth="xl" direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid item spacing={1}>
                  <Button variant="outlined" className={classes.buttonRounded}>Yes</Button>
                </Grid>
                <Grid item spacing={1}>
                  <Button variant="outlined" className={classes.buttonRounded}>No</Button>
                </Grid>
              </Grid>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item xs={12}>
              <Box px={2}>
                <Button variant="contained" onClick={handleCloseFilter} color="primary" fullWidth>
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogActions>
    </>
  );
}