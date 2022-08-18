import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Typography from '@material-ui/core/Typography';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Dialog, Button  } from '@material-ui/core';
import './classes.scss';
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
  ListItemAvatar: {
    width: '32px',
    height: '32px'
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


export default function ClassSessionInstructorsDialog() {
  const preventDefault = (event) => event.preventDefault();
  const classes = useStyles();
  const [openSessionInstructors, setOpenSessionInstructors] = React.useState(false);
      
    const handleClickOpenSessionInstructors = () => {
      setOpenSessionInstructors(true);
    };
    const handleCloseSessionInstructors = () => {
      setOpenSessionInstructors(false);
    };

  return (
    <>
      {/* Class SessionInstructorss Dialog Modal */}
      {/* <ThemeProvider theme={theme}> */}
        <Dialog onClose={handleCloseSessionInstructors} aria-labelledby="session-trainer-list" open={openSessionInstructors}>
          <DialogTitle id="session-trainer-list" onClose={handleCloseSessionInstructors}>
          <Button aria-label="close" color="secondary" onClick={preventDefault} startIcon={<ChevronLeftRoundedIcon />}>
              Class details
            </Button>
          </DialogTitle>
          <DialogContent dividers>
            <List className="instructorsList">
              {[0, 1, 2, 3].map((value) => {
                  return (
                  <ListItem key={value}>
                      <ListItemAvatar>
                      <Avatar className={classes.ListItemAvatar}
                          alt={`Avatar n°${value + 1}`}
                          src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                      </ListItemAvatar>
                      <ListItemText primary={`Line item ${value + 1}`} />
                  </ListItem>
                  );
              })}
            </List>
          </DialogContent>
        </Dialog>
      {/* </ThemeProvider> */}
      </>
  );
}