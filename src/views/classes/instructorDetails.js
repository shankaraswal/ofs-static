import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Typography from '@material-ui/core/Typography';
import { Dialog, Button, Grid, Box, Link, Divider, Badge  } from '@material-ui/core';
import './classes.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import ClassList from './list';
import { StarBorder } from '@material-ui/icons';
import TrainerImg from '../../source/images/instructor.png';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
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


export default function InstructorDetails() {
  const preventDefault = (event) => event.preventDefault();
  const classes = useStyles();
  const [openSessionInstructors, setOpenSessionInstructors] = React.useState(true);
      
    const handleClickOpenInstructorDetails = () => {
      setOpenSessionInstructors(true);
    };
    const handleCloseSessionInstructors = () => {
      setOpenSessionInstructors(false);
    };

  return (
    <>
        <Dialog onClose={handleCloseSessionInstructors} aria-labelledby="session-trainer-list" open={openSessionInstructors}>
          <DialogTitle id="session-trainer-list" onClose={handleCloseSessionInstructors}>
            <Button aria-label="instructors" color="secondary" onClick={preventDefault} startIcon={<ChevronLeftRoundedIcon />}>
              Instructors
            </Button>
          </DialogTitle>
          <DialogContent dividers>
          <Grid container className={classes.root} direction="row" justify="flex-end">
            <Grid item className={classes.item2} xs={12} sm={4} md={3} lg={4}>
            <Badge badgeContent={<StarBorder/>} color="default">
              <img width="104" height="104" spacing={0} alt={`trainer`} src={TrainerImg} />
            </Badge>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={8}>
              <Box mb={1}>
                <Typography variant="h4">About</Typography>
              </Box>
              <Box mb={3}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adicing elit. Praesent sollicitudin suscipit magna, nec sodales tortor dapibus eget.
                </Typography>
              </Box>
              
              <Box mb={4} direction="row" justify="flex-end">
                <Typography variant="body2">
                    <InstagramIcon />
                    Follow Tory on Instagram <Link color="secondary" onClick={preventDefault} className="pointer">@toryhale</Link>
                </Typography>
              </Box>
              
              <Box mb={1}>
                <Typography variant="h4">Hobbies</Typography>
              </Box>
              <Box mb={3}>
                <Typography variant="body1">
                  Lorem, ipsum, dolor, consectetur a elit. Praesent sollicitudin suscipit magna, nec sodales tortor.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider light/>

          <Box mt={4} mb={3}>
            <Typography variant="h4">Upcoming sessions</Typography>
          </Box>
          <ClassList />
          </DialogContent>
        </Dialog>
      </>
  );
}