import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, Paper, Box, ListItemIcon, ListItemText  } from '@material-ui/core';
import { ChevronRightOutlined, NotificationImportant } from '@material-ui/icons';
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
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: "center",
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

export default function SelectPaymentMethod() {
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
          <Box px={2} py={1}>
            <Typography variant="h3">Select a payment method</Typography>
          </Box>
          
          <List>
            <ListItem >
              <Paper variant="outlined" className={classes.paper} >
                <ListItemIcon>
                  <NotificationImportant fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Use a package" secondary="You have 3 packages available" />
                <ListItemIcon>
                  <ChevronRightOutlined fontSize="small" />
                </ListItemIcon>
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <ListItemIcon>
                  <NotificationImportant fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Pay casual rate" secondary="$35.00" />
                <ListItemIcon>
                  <ChevronRightOutlined fontSize="small" />
                </ListItemIcon>
              </Paper>
            </ListItem>
            <ListItem>
              <Paper variant="outlined" className={classes.paper} >
                <ListItemIcon>
                  <NotificationImportant fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Book now, pay later" />
                <ListItemIcon>
                  <ChevronRightOutlined fontSize="small" />
                </ListItemIcon>
              </Paper>
            </ListItem>
          </List>
        </DialogContent>
        {/* <DialogActions>
          <Grid container>
            <Grid item xs={12}>
              <Box px={2}>
                <Button variant="contained" disabled onClick={handleCloseFilter} color="primary" fullWidth>
                  Yes, continue booking
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogActions> */}
    </>
  );
}