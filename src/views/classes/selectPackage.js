import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, FormControlLabel, Paper, Box, Radio  } from '@material-ui/core';
import { ChevronLeftRounded } from '@material-ui/icons';
//import './classes.scss';
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

export default function SelectPackage() {
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
          <Typography variant="h3">Hiit class</Typography>
          <Typography variant="h4">Thursday, Jun 20</Typography>
          <Typography variant="body1">8:00 am - 9:00 am • Tory Hale</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Box px={0} py={1}>
            <Button variant="text" color="secondary" onClick={preventDefault} startIcon={<ChevronLeftRounded />}>
                Payment methods
            </Button>
          </Box>
          <Box px={2} py={1}>
            <Typography variant="h3">Select a package</Typography>
          </Box>
          <Box px={2} py={1}>
          
            <Grid container spacing={3} className={classes.root}>
              <Grid item xs={12}>
                <Paper variant="outlined">
                    <Grid container spacing={3}>
                      <Grid item xs={9} sm={10}>
                        <Box px={2} py={2}>
                            <Typography variant="h3">Bronze membership</Typography>
                            <Typography variant="body2">Unlimited access</Typography>
                          </Box>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                        <Box px={2} py={2}><Radio name="package" color="secondary" /></Box>
                      </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper variant="outlined">
                    <Grid container spacing={3}>
                      <Grid item  xs={9} sm={10}>
                        <Box px={2} py={2}>
                            <Typography variant="h3">10 pack</Typography>
                            <Typography variant="body2">2 remaining • Expires on 23 Sep 2019</Typography>
                          </Box>
                      </Grid>
                      <Grid item  xs={3} sm={2}>
                        <Box px={2} py={2}><Radio name="package" color="secondary" /></Box>
                      </Grid>
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper variant="outlined">
                    <Grid container spacing={3}>
                      <Grid item xs={9} sm={10}>
                        <Box px={2} py={2}>
                            <Typography variant="h3">20 pack</Typography>
                            <Typography variant="body2">10 remaining • Expires on 23 Sep 2019</Typography>
                          </Box>
                      </Grid>
                      <Grid item  xs={3} sm={2}>
                        <Box px={2} py={2}><Radio name="package" color="secondary" /></Box>
                      </Grid>
                    </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Box>

        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item xs={12}>
              <Box px={2}>
                <Button variant="contained" onClick={handleCloseFilter} color="primary" fullWidth>
                  Book
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogActions>
    </>
  );
}