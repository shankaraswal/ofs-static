import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Checkbox, Grid, List, ListItem, FormControlLabel, Paper, Box, Badge, Chip  } from '@material-ui/core';
import './classes.scss';
import { ChevronLeftRounded, PlaceOutlined } from '@material-ui/icons';
import TrainerImg from '../../source/images/instructor.png';
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

export default function ConfirmSessions() {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const [openFilter, setOpenFilter] = React.useState(false);
    const handleCloseFilter = () => {
    setOpenFilter(false);
};


  return (
    <>
      {/* Class Filters Dialog Modal */}
        <DialogTitle id="class-filters" onClose={handleCloseFilter}>
            <Button aria-label="close" color="secondary" onClick={preventDefault} startIcon={<ChevronLeftRounded />}>
                Select sessions
            </Button>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container align="center">
            <Grid item xs={12} >
              <Box my={4}>
                <Typography gutterBottom variant="h1">Hiit class</Typography>
                <Typography gutterBottom variant="body2">8:00am - 9:00am</Typography>
              </Box>
              <Box mt={4} mb={2}>
                <Badge gutterBottom >
                  <img width="56" height="56" spacing={0} alt={`trainer`} src={TrainerImg} gutterBottom />
                </Badge>
              </Box>
              <Box mb={4}>
                <Typography variant="h5">Instructor</Typography>
                <Typography variant="body1" gutterBottom>Gaspar Antunes</Typography>
              </Box>
              <Box my={4}>
                <Typography variant="h5">Location</Typography>
                <Typography variant="body1"><PlaceOutlined /> Collingwood (Studio 1)</Typography>
              </Box>
              <Box my={4}>
                <Typography variant="h5" gutterBottom>Selected sessions</Typography>
                <div className={classes.selected_sessions}>
                  <Chip variant="outlined" size="medium" color="secondary" label="Monday, 10th Jun" m={1} />
                  <Chip variant="outlined" size="medium" color="secondary" label="Monday, 17th Jun" />
                  <Chip variant="outlined" color="secondary" label="Monday, 1st Jul" />
                  <Chip variant="outlined" color="secondary" label="Monday, 8st Jul" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item xs={12}>
              <Box px={2}>
                <Button variant="contained" onClick={handleCloseFilter} color="primary" fullWidth>
                  Confirm and book
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogActions>
    </>
  );
}