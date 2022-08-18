import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Avatar, Box, Grid, Link } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import themeColors from '../../assets/theme/foundation/color';
import BannerImg from '../../source/images/rectangle.jpg';

const preventDefault = (event) => event.preventDefault();
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: themeColors.white.main,
  },
  modalHeaderImg: {
    padding: theme.spacing(0),

  },
  
  headerImg: {
    textAlign: 'center',
  },
  img: {
    width: "-webkit-fill-available",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.modalHeaderImg} {...other}>
      <Typography variant="h6"  className={classes.headerImg}>{children}</Typography>
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

export default function ClassDetailsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Class Details Dialog Modal */}
      {/* <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}> */}
        <DialogTitle id="class-details" onClose={handleClose}>
          <img src={BannerImg} alt="test" className="modalHeaderImg" />
        </DialogTitle>
        <DialogContent >
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h1">Hiit class</Typography>
              <Typography color="secondary">3 spots left</Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">Thursday, Jun 20</Typography>
              <Typography>8:00am - 9:00am</Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <AvatarGroup max={3}>
                <Avatar alt="Remy Sharp" src="" />
                <Avatar alt="Travis Howard" src="" />
                <Avatar alt="Cindy Baker" src="" />
                <Avatar alt="Agnes Walker" src="" />
              </AvatarGroup>
              <Typography gutterBottom><strong>Tory Hale, Jurrien Oldhof</strong> and <strong>2 more</strong></Typography>
              <Typography><Link variant="body2" href="#" onClick={preventDefault}>View info</Link></Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">Description</Typography>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin suscipit magna, nec sodales tortor dapibus eget. Integer vitae libero mattis nibh dapibus fermentum consectetur a eros ollicitudin suscips ing elit. Praesent solliciing elit. Praesent sollicituing elit. Praes… <Link href="#" color="secondary" onClick={preventDefault}>Read more</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">Class level</Typography>
              <Typography>
                Intermediate
              </Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">To bring</Typography>
              <Typography>
                • Towel
              </Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">Items supplied</Typography>
              <Typography>
                • Water
              </Typography>
            </Box>
          </Grid>
          <Grid container>
            <Box mb={2}>
              <Typography gutterBottom variant="h4">Custom header</Typography>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin suscipit magna, nec sodales tortor dapibus eget. Integer vitae libero mattis nibh dapibus fermentum consectetur a eros ollicitudin suscips ing elit. Praesent solliciing elit. Praesent sollicituing elit. Praes… <Link href="#" color="secondary" onClick={preventDefault}>Read more</Link>
              </Typography>
            </Box>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button variant="outlined" onClick={handleClose} color="primary" fullWidth>
                Book Multiple
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleClose} color="primary" fullWidth>
                Book
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      {/* </Dialog> */}
    </>
  );
}