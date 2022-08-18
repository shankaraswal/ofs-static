import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Checkbox, Grid, List, ListItem, FormControlLabel, Paper, Box  } from '@material-ui/core';
import './classes.scss';
import { PlaceOutlined } from '@material-ui/icons';
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
  paper:{
    width: '100%',
    padding: theme.spacing(1, 2)
  },
  ListItem:{
    padding: theme.spacing(0),
  }
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

export default function BookClassMultiDialog() {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = React.useState(false);
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  return (
    <>
      {/* Class Filters Dialog Modal */}
        <DialogTitle id="class-filters" onClose={handleCloseFilter}>
          Multiple booking
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={12} >
              <Box my={1} mx={[2]}>
                <Typography variant="h1">Hiit class</Typography>
                <Typography variant="body2">8:00am - 9:00am</Typography>
                <Typography variant="body2"><PlaceOutlined /> Collingwood (Studio 1)</Typography>
              </Box>
            </Grid>
          </Grid>
          <List >
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <FormControlLabel control={
                    <Checkbox name="sessionDate" color="secondary" />
                  } label="Monday, 3rd June"
                />
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <FormControlLabel control={
                    <Checkbox name="sessionDate" color="secondary" />
                  } label="Monday, 10th June"
                />
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <FormControlLabel control={
                    <Checkbox name="sessionDate" color="secondary" />
                  } label="Monday, 17th June"
                />
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <FormControlLabel control={
                    <Checkbox name="sessionDate" color="secondary" />
                  } label="Monday, 24th June"
                />
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <FormControlLabel control={
                    <Checkbox name="sessionDate" color="secondary" />
                  } label="Monday, 24th June"
                />
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                  <FormControlLabel control={
                      <Checkbox name="sessionDate" color="secondary" />
                    } label="Monday, 24th June"
                  />
              </Paper>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item xs={12}>
              <Box px={2}>
                <Button variant="contained" disabled onClick={handleCloseFilter} color="primary" fullWidth>
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogActions>
    </>
  );
}