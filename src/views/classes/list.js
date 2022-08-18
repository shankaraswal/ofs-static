import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
import { Avatar, Button, Typography, Paper, Hidden, Dialog } from "@material-ui/core";
// import ClassDetailsDialog from "./classDetails";
// import ClassSessionInstructorsDialog from "./sessionInstructors";
// import InstructorDetails from "./instructorDetails";
// import BookClassMultiDialog from "./bookClassMulti";
// import ConfirmSessions from "./confirmSessions";
// import BookingSpot from "./classBookingSpots";
import BookingProperties from "./classBookingProperties";
// import SelectPaymentMethod from "./selectPaymentMethod";
// import SelectPackage from "./selectPackage";
// import SelectPaymentMethodWithoutCredits from "./selectPaymentMethod_withoutCredits";
// import PurchaseCredits from './purchaseCredits';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  item2: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    padding: theme.spacing(1)
  },
  paper: {
    //height: 140,
    width: "100%",
    //display: "flexGrow",
    height: "100%",
  }
}));

export default function ClassList(){
  const [open, setOpen] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <>
    {/* <Container maxWidth={"xl"}> */}
      <Grid container className={classes.root + " classList2"} direction="row">
        <Grid item className={classes.item2 + " listHead"} xs={12}>
          <Typography variant="h4">Sunday, November 20</Typography>
        </Grid>
      </Grid>
      
      <Grid container className={classes.root + " classList2"} direction="row" justify="flex-end" alignItems="center">
        <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h4">8:00am</Typography>
            <Typography variant="body2">30mins</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2+ " pointer"} xs={9} sm={3} md={3} lg={3} onClick={handleClickOpen}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h3">Hiit</Typography>
            <Typography variant="body2">Room2</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2} xs={9} sm={2} md={3} lg={3}>
            <Hidden only={['xs', 'sm']}>
              <Avatar className="avatar" spacing={0} alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&  imgsize=881753`} />
            </Hidden>
            <Typography variant="body2">Tory Hale</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
            <Typography variant="h4">3 spots left</Typography>
        </Grid>
        <Grid item className={classes.item2 + " text-right"} xs={5} sm={3} md={2} lg={2} justify="flex-end">
            <Button variant="outlined" color="secondary" maxWidth="sm" onClick={handleClickOpen}>Join Waitlist</Button>
        </Grid>
      </Grid>

      <Grid container className={classes.root + " classList2"} direction="row" justify="flex-end" alignItems="center">
        <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h4">9:00am</Typography>
            <Typography variant="body2">30mins</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2+ " pointer"} xs={9} sm={3} md={3} lg={3} onClick={handleClickOpen}>
            <Typography variant="h3">Session title</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={9} sm={2} md={3} lg={3}>
            <Hidden only={['xs', 'sm']}>
              <Avatar className="avatar" spacing={0} alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&  imgsize=881753`} />
            </Hidden>
            <Typography variant="body2">Claire Webb</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
            <Typography variant="h4">No spots left</Typography>
        </Grid>
        <Grid item className={classes.item2 + " text-right"} xs={5} sm={3} md={2} lg={2} justify="flex-end">
            <Button variant="outlined" color="secondary" maxWidth="sm" onClick={handleClickOpen}>Join waitlist</Button>
        </Grid>
      </Grid>

      <Grid container className={classes.root + " classList2"} direction="row" justify="flex-end" alignItems="center">
        <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h4">10:00am</Typography>
            <Typography variant="body2">30mins</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2+ " pointer"} xs={9} sm={3} md={3} lg={3} onClick={handleClickOpen}>
            <Typography variant="h3">Session title</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={9} sm={2} md={3} lg={3}>
            <Hidden only={['xs', 'sm']}>
              <Avatar className="avatar" spacing={0} alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&  imgsize=881753`} />
            </Hidden>
            <Typography variant="body2">Kyle Black</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
            <Typography variant="h4">3 spots left</Typography>
        </Grid>
        <Grid item className={classes.item2 + " text-right"} xs={5} sm={3} md={2} lg={2} justify="flex-end">
            <Button variant="outlined" color="secondary" maxWidth="sm" onClick={handleClickOpen}>Book</Button>
        </Grid>
      </Grid>

      <Grid container className={classes.root + " classList2"} direction="row">
        <Grid item className={classes.item2 + " listHead"} xs={12}>
          <Typography variant="h4">Monday, November 21</Typography>
        </Grid>
      </Grid>
      
      <Grid container className={classes.root + " classList2"} direction="row" justify="flex-end" alignItems="center">
        <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h4">8:00am</Typography>
            <Typography variant="body2">30mins</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2+ " pointer"} xs={9} sm={3} md={3} lg={3} onClick={handleClickOpen}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h3">Hiit</Typography>
            <Typography variant="body2">Room2</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2} xs={9} sm={2} md={3} lg={3}>
            <Hidden only={['xs', 'sm']}>
              <Avatar className="avatar" spacing={0} alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&  imgsize=881753`} />
            </Hidden>
            <Typography variant="body2">Tory Hale</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
            <Typography variant="h4">3 spots left</Typography>
        </Grid>
        <Grid item className={classes.item2 + " text-right"} xs={5} sm={3} md={2} lg={2} justify="flex-end">
            <Button variant="outlined" color="secondary" maxWidth="sm" onClick={handleClickOpen}>Book</Button>
        </Grid>
      </Grid>

      <Grid container className={classes.root + " classList2"} direction="row" justify="flex-end" alignItems="center">
        <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
          <Paper elevation="0" className={classes.paper}>
            <Typography variant="h4">9:00am</Typography>
            <Typography variant="body2">30mins</Typography>
          </Paper>
        </Grid>
        <Grid item className={classes.item2+ " pointer"} xs={9} sm={3} md={3} lg={3} onClick={handleClickOpen}>
            <Typography variant="h3">Session title</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={9} sm={2} md={3} lg={3}>
            <Hidden only={['xs', 'sm']}>
              <Avatar className="avatar" spacing={0} alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&  imgsize=881753`} />
            </Hidden>
            <Typography variant="body2">Claire Webb</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
            <Typography variant="h4">No spots left</Typography>
        </Grid>
        <Grid item className={classes.item2 + " text-right"} xs={5} sm={3} md={2} lg={2} justify="flex-end">
            <Button variant="outlined" color="secondary" maxWidth="sm" onClick={handleClickOpen}>Join waitlist</Button>
        </Grid>
      </Grid>

      <Grid container className={classes.root + " classList2"} direction="row" justify="flex-end" alignItems="center">
        <Grid item className={classes.item2} xs={3} sm={2} md={2} lg={2}>
        <Paper elevation="0" className={classes.paper}>
            <Typography variant="h4">10:00am</Typography>
            <Typography variant="body2">30mins</Typography>
        </Paper>
        </Grid>
        <Grid item className={classes.item2+ " pointer"} xs={9} sm={3} md={3} lg={3} onClick={handleClickOpen}>
            <Typography variant="h3">Session title</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={9} sm={2} md={3} lg={3}>
            <Hidden only={['xs', 'sm']}>
              <Avatar className="avatar" spacing={0} alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&  imgsize=881753`} />
            </Hidden>
            <Typography variant="body2">Kyle Black</Typography>
        </Grid>
        <Grid item className={classes.item2} xs={4} sm={2} md={2} lg={2}>
            <Typography variant="h4">3 spots left</Typography>
        </Grid>
        <Grid item className={classes.item2 + " text-right"} xs={5} sm={3} md={2} lg={2} justify="flex-end">
            <Button variant="outlined" color="secondary" maxWidth="sm" onClick={handleClickOpen}>Book</Button>
        </Grid>
      </Grid>
    {/* </Container> */}

    
      {/* Class Details Dialog Modal */}
      <Dialog onClose={handleClose} aria-labelledby="class-details" open={open}>
        {/* <ClassDetailsDialog /> */}
        {/* <ClassSessionInstructorsDialog /> */}
        {/* <InstructorDetails /> */}
        {/* <BookClassMultiDialog /> */}
        {/* <ConfirmSessions /> */}
        {/* <BookingSpot /> */}
        <BookingProperties />
        {/* <SelectPaymentMethod /> */}
        {/* <SelectPackage /> */}
        {/* <SelectPaymentMethodWithoutCredits /> */}
        {/* <PurchaseCredits /> */}
      </Dialog> 
    </>
  );
}
