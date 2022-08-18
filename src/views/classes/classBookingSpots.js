import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, CardMedia } from '@material-ui/core';
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
  selected_sessions: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  media: {
    paddingTop: "56.6%",
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

export default function BookingSpot() {
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
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid xs={12} sm={10} item align="center">
              <Box mt={5} mb={2}>
                <Typography variant="h4">Select your spot</Typography>
              </Box>
              <Box>
                <CardMedia 
                  className={classes.media}
                  component="image"
                  image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                  title="Contemplative Reptile" 
                  text = "yyahi to hai"
                />
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